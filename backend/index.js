const http = require("http");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const toDoListRouter = require("./routes/toDoList");
const credentialRoute = require("./routes/userCredential");

const app = express();
const originURL = "http://localhost:3000";
const PORT = process.env.PORT;;
const server = http.createServer(app);
const corsOption = {
  origin: originURL,
  optionSuccessStatus: 200,
  method: "GET, POST, DELETE",
};
app.use(cookieParser());
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/list", toDoListRouter);
app.use("/api/login", credentialRoute);
app.use("/", (req, res, next) => {
  res.send("hello");
});

server.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
