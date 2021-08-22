"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (_, res) => {
    res.send('Hello World!');
});
app.listen(5000, () => console.log('Server is up and running'));
//# sourceMappingURL=index.js.map