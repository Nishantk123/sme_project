const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const userRouter = require("./routes/user_router")
const login_router = require("./routes/login_router")
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

app.use("/user",userRouter)
app.use('/login',login_router)

const server = http.createServer(app);
const { API_PORT } = process.env;
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
