const mongoose = require('mongoose');
const moment = require('moment');
const Twilio = require('twilio');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// To create an appointment, we will require the following: date, time
// doctor, clinic, and name of appointment.
// new AppointmentSchema object for login purposes
const AppointmentSchema = new Schema({
  date: {
    type: Date,
    trim: true,
    required: 'Date name is required',
  },
  time: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  remindAt:{
    type:Date,
    trim:true,
  },
  // this is populated by dropdown
  doctor: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  //this is reason for visit
  appointmentName: {
    type: String,
    trim: true,
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

AppointmentSchema.methods.requiresNotification = function(date) {
  console.log(moment(this.remindAt).tz('Asia/kolkata').utc());
  return Math.round(moment.duration(moment(this.remindAt).tz('Asia/Kolkata').utc()
                          .diff(moment(date).tz('Asia/Kolkata').utc())
                        ).asMinutes()) === 0;
};

AppointmentSchema.statics.sendNotifications = function(callback) {
  // now
  const searchDate = new Date(); console.log(moment(searchDate).utc());
  Appointment
    .find()
    .then(function(appointments) {
      appointments = appointments.filter(function(appointment) {
              return appointment.requiresNotification(searchDate);
      });
      if (appointments.length > 0) {
        sendNotifications(appointments);
      }
    });

    /**
    * Send messages to all appoinment owners via Twilio
    * @param {array} appointments List of appointments.
    */
    function sendNotifications(appointments) {
        const client = new Twilio('ACc8a6f87c2efc876de0d082be6f06f22f', 'e853b6a2b11ce7f90d83ff596c279f35');
        appointments.forEach(function(appointment) {
            // Create options to send the message
            const options = {
                // to: `+ ${appointment.phoneNumber}`,
                to:'+918529196217',
                from: '+19033005175',
                /* eslint-disable max-len */
                body: `Hi. Just a reminder that you have an appointment coming up. of type ${appointment.appointmentName} with Doctor ${appointment.doctor} at${appointment.time} `,
                /* eslint-enable max-len */
            };

            // Send the message!
            client.messages.create(options, function(err, response) {
                if (err) {
                    // Just log it for now
                    console.error(err);
                } else {
                    // Log the last few digits of a phone number
                    // let masked = appointment.phoneNumber.substr(0,
                    //     appointment.phoneNumber.length - 5);
                    let num='+918529196217';
                    let masked=num.substring(0,num.length-5);
                    masked += '*****';
                    console.log(`Message sent to ${masked}`);
                }
            });
        });

        // Don't wait on success/failure, just indicate all messages have been
        // queued for delivery
        if (callback) {
          callback.call();
        }
    }
};

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// Export the Appointment model
module.exports = Appointment;
