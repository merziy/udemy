// async function hello() {}

// const example = async () => {
//   // throw new Error;
//   return "Testing";
// };

// example()
//   .then((data) => {
//     console.log("Resolved with:", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Username or password missing.";
  if (password === "corgi") return "Welcome.";
  throw "Invalid password";
};

login("admin", "corgi")
  .then((msg) => {
    console.log("Logged in.", msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
