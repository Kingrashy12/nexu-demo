import { Schema } from "memoriadb";

const User = Schema({
  fields: {
    firstName: String,
    lastName: String,
    email: String,
    number: Number,
    country: String,
    password: String,
    username: String,
  },
  required: ["email", "firstName", "lastName", "username", "password"],
  unique: ["email", "username"],
  collection: "User",
});

export default User;
