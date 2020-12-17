import express from "express";
import * as http from "http";
import initMongoose from "./db/mongoose";
import initApp from "./appInit";
import initIo from "./socketServer";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

initMongoose();
initApp(app);
initIo(io);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
