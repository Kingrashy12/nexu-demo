import { defineConfig } from "nexujs";

export default defineConfig({
  port: 5000,
  keys: {
    public: String(process.env.NEXU_PUBLIC_KEY),
    private: String(process.env.NEXU_PRIVATE_KEY),
  },
  corsConfig: {
    origin: "http://localhost:5173",
  },
  dev: {
    // Only use this one development, don't add the NODE_ENV=development to your production env.
    disableEncryption: true,
  },
});
