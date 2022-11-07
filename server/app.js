const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const userRouter = require("./routes/user-routes")
const otpRouter = require("./routes/otp-routes");
const mailRouter = require("./routes/mail-routes")
require("dotenv").config();
require("./config/database").connect();

const app = express();
app.use(express.json({ limit: "50mb" }));
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST","PATCH"],

  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));

app.use("/user", userRouter)
app.use("/otp", otpRouter)
app.use("/mail", mailRouter)

const server = http.createServer(app);
const { API_PORT } = process.env;
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
