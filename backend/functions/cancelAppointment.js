const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { appointmentId } = JSON.parse(event.body);
  try {
    await dynamo
      .delete({
        TableName: "Appointments",
        Key: { appointmentId },
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Appointment cancelled" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
