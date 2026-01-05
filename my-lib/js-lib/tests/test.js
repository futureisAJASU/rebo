import { hello } from "../src/index.js";
if (hello() !== "hello") process.exit(1);
console.log("ok");
