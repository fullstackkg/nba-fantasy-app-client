import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // By default the port is 5731, so we will change it
  server: {
    port: 3000,
  },
  plugins: [react()],
});
