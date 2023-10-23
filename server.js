const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv")
const socketIO = require('socket.io');
const server = require('http').createServer(app);
const PORT = 3000;

// Sử dụng bodyParser để xử lý dữ liệu từ FormData
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.json({ limit: "50mb" }));
// chấp nhận các yêu cầu từ các nguồn khác miền
app.use(cors());
// ghi nhật ký hoạt động
app.use(morgan("common"));

//Kết Nối Cơ Sở Dữ Liệu
// require('./connection');

server.listen(PORT, () => {
    console.log('Restful API server started on:', PORT);
})