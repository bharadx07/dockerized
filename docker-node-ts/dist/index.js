"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (_, res) => {
    res.json({ message: "Docker is easy! 🐳" });
});
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
app.listen(port, () => console.log(`Server Running On Port ${port} Successfully.`));
//# sourceMappingURL=index.js.map