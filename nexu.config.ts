import { defineConfig } from "nexujs";

export default defineConfig({
  port: 5000,
  key: String(process.env.NEXU_KEY),
  corsConfig: {
    origin: "http://localhost:5173",
  },
});
