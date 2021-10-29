const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ["description", "completed"];
  const isValidUpdate = updates.every((update) =>
    allowUpdates.includes(update)
  );
  if (!isValidUpdate) {
    return res.status(404).send("Update cant possible");
  }
  try {
    const task = await Task.findById(req.params.id);
    updates.forEach((update) => {
      task[update] = req.body[update];
      // await task.save()
    });
    // const task = Task.findByIdAndUpdate(req.param.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!task) {
      return res.status(404).send("Update no found");
    }
  } catch (e) {
    res.status(404).send(e);
  }
});
router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }

  // task
  //   .save()
  //   .then(() => {
  //     res.send(task);
  //     console.log(task);
  //   })
  //   .catch((e) => {
  //     res.status(404).send(e);
  //   });
});



router.get("/tasks", async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (e) {
    res.status(401).send(e);
  }
  // Task.find({})
  //   .then((task) => {
  //     res.status(200).send(task);
  //   })
  //   .catah((e) => {
  //     res.status(404).send(e);
  //   });
});
router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(400).send("User not found");
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(404).send(e);
  }

  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send("Task is unavailable");
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(404).send(e);
  //   });
});
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send("Invalid Id");
    }
    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});
module.exports = router;
