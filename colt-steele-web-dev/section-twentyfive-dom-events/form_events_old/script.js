const tweetForm = document.getElementById("dogs");
const tweetContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  // Prevents default behavior as a result of the event
  e.preventDefault();
  // const usernameInput = document.querySelectorAll("iput")[0];
  // const tweetInput = document.querySelectorAll("input")[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;

  addTweet(usernameInput.value, tweetInput.value);

  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");

  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);

  tweetContainer.append(newTweet);
};
