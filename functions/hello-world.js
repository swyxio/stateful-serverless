let abc = 0;
exports.handler = async (event, context) => {
  abc += 1;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, abc is ${abc}` })
  };
  // const subject = event.queryStringParameters.name || 'World';
};
