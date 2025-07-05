exports.handler = async () => {
  // Dummy static available slots
  const slots = ["2025-07-05 10:00", "2025-07-05 11:00", "2025-07-05 14:00"];

  return {
    statusCode: 200,
    body: JSON.stringify(slots),
  };
};
