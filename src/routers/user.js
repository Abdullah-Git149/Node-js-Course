const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(401).send(e);
  }

  // user
  //   .save()
  //   .then(() => {
  //     res.send(user);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(404).send(e);
  }

  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((e) => {
  //     res.status(404).send(e);
  //   });
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).send("User not founf");
    }

    res.status(201).send(user);
  } catch (e) {
    res.status(404).send(e);
  }

  router.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ["name", "password", "email", "age"];
    const isValidUpdate = updates.every((update) =>
      allowUpdates.includes(update)
    );
    if (!isValidUpdate) {
      return res.status(404).send("Update cant possible");
    }

    try {
      const user = await User.findById(req.params.id);

      updates.forEach((update) => {
        user[update] = req.body[update];
      });
      await user.save();

      // const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      //   new: true,
      //   runValidators: true,
      // });
      if (!user) {
        return res.status(405).send("User not found");
      }
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });

  // User.findById(_id)
  //   .then((users) => {
  //     if (!users) {
  //       return res.status(400).send("User not found");
  //     }
  //     res.send(users);
  //   })
  //   .catch((e) => {
  //     res.status(404).send(e);
  //   });
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("invalid ID");
    }
    res.send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
