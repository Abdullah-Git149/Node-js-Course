require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("617564704cb3f42730039376", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log("No of doc are", result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// ==========using async await==========

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count =await User.countDocuments({ age });
  return count;
};
updateAgeAndCount("6175644568b0d0288814f520", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
