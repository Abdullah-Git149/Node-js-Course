require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("6171c6f745b2d513b8e71ec7")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log("no of false doc", result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// ==========using async await==========

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

deleteTaskAndCount("6176e93c2e43ab234c4d789b")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
