const WebSocket = require('./WebSocket');
const CONSTANTS = require('../../constants');

class NotificationController extends WebSocket{

  emitEntryCreated (target) {
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_ENTRY_CREATED);
  }

  emitChangeMark (target) {
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_CHANGE_MARK);
  }

  // emitChangeOfferStatus (target, message, contestId) {
  //   console.log(target);
  //   this.io.to(target).emit(CONSTANTS.NOTIFICATION_CHANGE_OFFER_STATUS,
  //     { message, contestId });
  // }

  emitChangeOfferStatus ({status,target, message, contestId}) {
    console.log(' = STATUS_NOTIF = ',status);
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_CHANGE_OFFER_STATUS,
      { status,message, contestId });
  }
}

module.exports = NotificationController;
