const axios = require("axios");

const request = require("request");

const url = "http://118.67.215.190:8880/api/users";

let friends = [
  {
    firstName: "Masum",
    lastName: "Ahmed",
    girlFriends: [
      { firstName: "jjjj", lastName: "hhhh", age: 17 },
      { firstName: "jjjj", lastName: "hhhh", age: 21 }
    ]
  },
  {
    firstName: "Rehemul",
    lastName: "Hasan"
  },
  {
    firstName: "Jabir",
    lastName: "Abdullah"
  }
];

masum = friends[0];
girlFriends = friends[0].girlFriends;
lastGirlFriend = friends[0].girlFriends[friends[0].girlFriends.length - 1];

axios
  .get(url)
  .then(resposne => console.log(resposne.data))
  .catch(err => console.log(err));
