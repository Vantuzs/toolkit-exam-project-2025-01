const db = require('../models');
const ServerError =require('../errors/ServerError');
const contestQueries = require('./queries/contestQueries');
const userQueries = require('./queries/userQueries');
const controller = require('../socketInit');
const UtilFunctions = require('../utils/functions');
const CONSTANTS = require('../constants');
const { where } = require('sequelize');

module.exports.getOffers = (req, res, next) => {
  console.log(req.body);
  db.Offers.findAll({
    where: {isModerated: false,
      status: 'pending'
    },
    limit: req.body.limit,
    offset: req.body.offset ? req.body.offset : 0,
    include: [
          {
            model: db.Users,
            required: false,
            attributes: ['id','avatar','displayName','email','firstName','lastName','rating'],
          },
        ],
  })
    .then(offers => {
      let haveMore = offers.length > 0;
      if (offers.length === 0) {
        haveMore = false;
      }
      res.send({ offers: offers, haveMore });
    })
    .catch(err => {
      next(new ServerError());
    });
};

const resolveOffer = (offerId)=>{
  db.Offers.update(
    {isModerated: true},
    {where: {id: offerId} }
  )
}

const rejectOffer = async (offerId, creatorId, contestId = 'Moderator') => {
  const rejectedOffer = await contestQueries.updateOffer(
    { status: CONSTANTS.OFFER_STATUS_REJECTED }, { id: offerId });
  controller.getNotificationController().emitChangeOfferStatus({status: CONSTANTS.OFFER_STATUS_REJECTED,target: creatorId,
    message: 'Someone of yours offers was rejected', contestId});
  return rejectedOffer;
};

module.exports.setOfferStatusModerator = async (req, res, next) => {
  if (req.body.command === 'reject') {
    try {
      const offer = await rejectOffer(req.body.offerId);
      res.send(offer);
    } catch (err) {
      next(err);
    }
  } else if (req.body.command === 'resolve') {
    try {
      const offer = await resolveOffer(req.body.offerId);
      res.send(offer);
    } catch (err) {
      next(err);
    }
  }
};