let abc = 0;
exports.handler = async (event, context) => {
  abc += 1;
  return new Promise((yay) => {
    setTimeout(
      yay({
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, abc is ${abc}` })
      }),
      1000
    );
  });
};
