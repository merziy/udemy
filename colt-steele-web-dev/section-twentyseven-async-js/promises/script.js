const fakeRequestCallBack = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// Callback hell example

fakeRequestCallBack(
  "books.com/page1",
  function (response) {
    console.log("It Worked.");
    console.log(response);
    fakeRequestCallBack(
      "books.com/page2",
      function (response) {
        console.log("It worked again.");
        console.log(response);
        fakeRequestCallBack(
          "books.com/page3",
          function (response) {
            console.log("It worked a third time.");
            console.log(response);
          },
          function (error) {
            console.log("It did not work a third time. Connection Timeout.");
            console.log(error);
          }
        );
      },
      function (error) {
        console.log("It did not work again. Connection Timeout.");
        console.log(error);
      }
    );
  },
  function (error) {
    console.log("It did not work. Connection Timeout.");
    console.log(error);
  }
);

// Promises example

// const request = fakeRequestPromise("yelp.com/api/coffee");
// request
//   .then(() => {
//     console.log("The Promises call worked!");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("The Promises call for page 2 worked!");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("The Promises call for page 3 worked!");
//           })
//           .catch(() => {
//             console.log("An error has occured for page 3.");
//           });
//       })
//       .catch(() => {
//         console.log("An error has occured for page 2.");
//       });
//   })
//   .catch(() => {
//     console.log("An error has occured.");
//   });

fakeRequestPromise("yelp.com/api/coffee/page1");
  .then((data) => {
    console.log("The Promises call worked!");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then(() => {
    console.log("It worked for page 2!");
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee/page3')
  })
  .then(() => {
    console.log("It worked for page 3!");
    console.log(data);
  })
  .catch(() => {
    console.log("An error has occured.");
  });