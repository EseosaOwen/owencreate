import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "0.0.0.0",
  //   allowedHosts: ["51c2-102-91-134-214.ngrok-free.app"],
  // },
});
