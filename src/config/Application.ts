import { ExpressConfig } from "./Express";
import { logger } from "../common/logging";


export class Application {
    server: any; express: ExpressConfig;
    constructor() {
    this.express = new ExpressConfig();
      const port = 3000; this.server =
        this.express.app.listen(port, () => {
          logger.info(`Server Started! Express: http://localhost:${port}`);
        });
    }
  }

  