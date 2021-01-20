let question2 = () => {
  // You work for a start-up. Your manager has requested you to send emails to all the users in the system. You can only send 100 emails in a single batch call. These 100 emails must be split into two different segments. Using the example above, write a simple function in JavaScript that will enable you to segment 100 Users equally using their User ID number. Your solution should present two different groups of users stored in an array using their ID. Hint: You can seperate users by odd and even user id and add results into an even array and odd array just like we did above.

  let oddUsers = [];
  let evenUsers = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenUsers.push(i);
    } else {
      oddUsers.push(i);
    }
  }

  console.log("oddUser = " + oddUsers);
  console.log("evenUser = " + evenUsers);
};
question2();
