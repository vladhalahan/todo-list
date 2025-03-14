import type { NextConfig } from "next";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Database = require("better-sqlite3");

const nextConfig: NextConfig = {
 
};

module.exports = {
  output: "standalone",
  experimental: {
    outputFileTracingIncludes: {
      "/": ["node_modules/better-sqlite3"]
    }
  }
};

export default nextConfig;
