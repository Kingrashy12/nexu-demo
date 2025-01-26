import { nexuRouter, validateEmail, validateFields } from "nexujs";
import {
  createUser,
  deleteUser,
  findUser,
  getUsers,
  updateUser,
} from "../controller/users";
import validateParams from "../utils/vaildateFields";

const router = nexuRouter;

router.post(
  "/create",
  validateFields(["email", "firstName", "lastName", "username", "password"]),
  validateEmail,
  createUser
);

router.get("/", getUsers);
router.get("/:id", validateParams(["id"]), findUser);

router.patch("/one/:id", validateParams(["id"]), updateUser);
router.delete("/:id", validateParams(["id"]), deleteUser);

export default router;
