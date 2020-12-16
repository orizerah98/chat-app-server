import { Server } from "socket.io";
import { Socket } from "socket.io";
import { addMessage } from "./api/services/chatService";
import { IMessage } from "./interfaces/chat";

var activeSockets: Socket[] = [];

const sendMessage = (message: string, socketId: string) => {
  activeSockets.map((socket) => {
    if (socket.id != socketId) {
      socket.emit("sendMessage", message);
    }
  });
};

export default function initSocketServer(socketServer: Server) {
  socketServer.on("connection", (socket: Socket) => {
    activeSockets.push(socket);
    socket.on("sendMessage", (data: IMessage) => {
      const { chatId, message, displayName } = data;
      addMessage(chatId, displayName, new Date(), message);
      sendMessage(JSON.stringify(data), socket.id);
    });
  });
  socketServer.on("disconnect", (socket: Socket) => {
    activeSockets = activeSockets.filter(
      (activeSocket: Socket) => activeSocket.id !== socket.id
    );
  });
}
