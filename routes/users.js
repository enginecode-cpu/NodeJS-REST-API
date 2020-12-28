import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuidv4();
  const userWithId = { ...user, id: userId };

  users.push(userWithId);

  res.send(
    `User with the name ${user.firstname}, ${user.lastname}, ${user.age} added to the database!`
  );
});

export default router;
