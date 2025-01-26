import { catchError } from "memoriadb";
import { encrypt, NexuHandler, processRequest } from "nexujs";
import User from "../model/User";

const createUser: NexuHandler = (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  try {
    const securedPass = encrypt(password);
    const user = new User({
      firstName,
      lastName,
      email,
      username,
      password: securedPass,
    });
    res.status(200).json(user);
  } catch (error) {
    catchError(error);
  }
};

const getUsers = processRequest({
  async action(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      catchError(error);
    }
  },
});

const findUser = processRequest({
  async action(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      catchError(error);
    }
  },
});

const updateUser = processRequest({
  async action(req, res) {
    try {
      const user = await User.updateById(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      catchError(error);
    }
  },
});

const deleteUser = processRequest({
  async action(req, res) {
    try {
      const user = await User.deleteById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      catchError(error);
    }
  },
});

export { createUser, getUsers, findUser, updateUser, deleteUser };
