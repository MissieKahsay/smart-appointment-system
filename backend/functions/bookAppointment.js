const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const appointment = {
      appointmentId: uuidv4(),
      name: data.name,
      email: data.email,
      time: data.time,
    };

    await dynamo
      .put({
        TableName: "Appointments",
        Item: appointment,
      })
      .promise();

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Appointment booked", appointment }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Booking failed", detail: err.message }),
    };
  }
};
