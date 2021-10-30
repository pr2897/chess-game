require("dotenv").config({ path: "backend/config/config.env" });
const connectDB = require("./config/db");

const app = require("./app");
connectDB();

const PORT = process.env.PORT;
const server = app.listen(PORT, () =>
  console.log(`Server up and running on address: http://localhost:${PORT}`)
);

process.on("unhandledRejection", (err) => {
  server.close();
});
