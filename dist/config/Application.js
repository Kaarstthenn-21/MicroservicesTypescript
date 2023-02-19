"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const Express_1 = require("./Express");
const logging_1 = require("../common/logging");
class Application {
    constructor() {
        this.express = new Express_1.ExpressConfig();
        const port = 3000;
        this.server =
            this.express.app.listen(port, () => {
                logging_1.logger.info(`Server Started! Express: http://localhost:${port}`);
            });
    }
}
exports.Application = Application;
