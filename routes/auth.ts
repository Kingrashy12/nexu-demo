import { nexuRouter } from "nexujs";

const router = nexuRouter;

router.post("/login", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).json(data);
});

export default router;
