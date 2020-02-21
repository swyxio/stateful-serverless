var abc = 1;
exports.handler = async (event, context) => {
  try {
    abc += 1;
    const subject = event.queryStringParameters.name || 'World';
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject} ${abc}` })
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
