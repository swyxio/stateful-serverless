let abc = 0;
exports.handler = async (event, context) => {
  return new Promise((yay) => {
    setTimeout(() => {
      abc += 1;
      yay({
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, abc is ${abc}` })
      });
    }, 10000);
  });
};
