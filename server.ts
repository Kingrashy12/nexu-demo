import { app, sendContent } from "nexujs";
import authRoute from "./routes/auth";
import Hello from "./routes/hello";

app.use("/auth", authRoute);
app.use("/hello", Hello);

app.get("/", (req, res) => {
  res.send(sendContent);
});
