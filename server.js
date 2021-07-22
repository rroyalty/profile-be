"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = require('./routes/index');
require('dotenv').config();
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = process.env.PORT || 3005;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
