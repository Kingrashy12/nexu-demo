import { app, ErrorLogger, sendContent } from "nexujs";
import userRoutes from "./routes/user";
import Hello from "./routes/hello";

app.use("/users", userRoutes);
app.use("/hello", Hello);

app.get("/", (req, res) => {
  res.send(sendContent);
});

app.use(ErrorLogger);
