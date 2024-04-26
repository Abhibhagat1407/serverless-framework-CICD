"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello!! A C Patil College of Engineering, navi mumbai",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
