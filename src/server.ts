import express from "express";
import * as http from "http";

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
