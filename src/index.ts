import { serve } from "bun";
import index from "./index.html";

const server = serve({
  port: 3001,
  hostname: "192.168.50.230",
  routes: {
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
