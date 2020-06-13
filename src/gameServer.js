const { Server } = require("boardgame.io/server");
const { KalitidiGame: Kalitidi } = require("./game/game");
import { GAME_SERVER_PORT } from "./config/config";
const server = Server({
    games: [Kalitidi],
});

server.run(GAME_SERVER_PORT);
