import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4();
  const userWithId = { ...user, id: userId };

  users.push(userWithId);

  res.send(
    `User with the name ${user.firstname}, ${user.lastname}, ${user.age} added to the database!`
  );
};

export const detailUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} delete to the database!`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;

  const userToUpdate = users.find((user) => user.id === id);

  if (firstname) userToUpdate.firstname = firstname;
  if (lastname) userToUpdate.lastname = lastname;
  if (age) userToUpdate.age = age;

  res.send(`User with the ${id} has been updated`);
};
