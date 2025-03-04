// https://vite.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "radisystems.online",
      "www.radisystems.online",
      "localhost",
      "127.0.0.1",
      "206.189.8.67",
    ], // Allow the specific host
  },
});
