
const Appointment = require('../models/appointment');

const notificationsWorker = function() {
  return {
    run: function() {
      Appointment.sendNotifications();
    },
  };
};

module.exports = notificationsWorker();