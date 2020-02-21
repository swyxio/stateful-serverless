let count = 0;
let firstInvoke = new Date();
exports.handler = async (event, context) => {
  let currentInvoke = new Date();
  let diff = currentInvoke - firstInvoke;
  if (diff < 5000) {
    count += 1;
  } else {
    count = 1;
    firstInvoke = currentInvoke;
  }
  if (count > 3) {
    return {
      statusCode: 429,
      body: JSON.stringify({ message: `Too many requests! ${count}` })
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello, count is ${count}` })
    };
  }
};
