const WebSocket = require('./WebSocket');
const CONSTANTS = require('../../constants');

class NotificationController extends WebSocket{

  emitEntryCreated (target) {
    console.log('hello');
    console.log(target);
    // this.io.to(target).emit(CONSTANTS.NOTIFICATION_ENTRY_CREATED);
    this.io.to(target).emit('onEntryCreated');
  }

  emitChangeMark (target) {
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_CHANGE_MARK);
  }

  emitChangeOfferStatus ({status,target, message, contestId}) {
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_CHANGE_OFFER_STATUS,
      { status,message, contestId });
  }
}

module.exports = NotificationController;
