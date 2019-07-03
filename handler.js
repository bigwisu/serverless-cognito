'use strict';

module.exports.hiGuests = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi! You are a guest'
    }),
  };

  callback(null, response);
};

module.exports.hiUsers = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'You are a registered user!'
    }),
  };

  callback(null, response);
};

module.exports.presignup = (event, context, callback) => {

  console.log("presignup exec");

  // Confirm the user
  event.response.autoConfirmUser = true;

  // Set the email as verified if it is in the request
  if (event.request.userAttributes.hasOwnProperty("email")) {
      event.response.autoVerifyEmail = true;
      console.log("Email Address",event.request.userAttributes.email);
  }

  // Set the phone number as verified if it is in the request
  if (event.request.userAttributes.hasOwnProperty("phone_number")) {
      event.response.autoVerifyPhone = true;
      console.log("Phone Number",event.request.userAttributes.phone_number);
  }

  // Return to Amazon Cognito
  callback(null, event);
};
