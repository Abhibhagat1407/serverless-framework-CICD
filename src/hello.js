"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello!! A C Patil College of Engineering",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
