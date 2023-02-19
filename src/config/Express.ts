import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { useExpressServer } from 'routing-controllers';
import path from 'path';
import fs from 'fs';

//Controllers
import { HelloWorld } from '../controllers/HelloWorld';
export class ExpressConfig {
  app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setUpControllers();
  }


  setUpControllers() {
    const controllersPath = path.resolve('dist', 'controllers');
    let controladoresFiles: string[] = [];
    const file = fs.readdirSync(controllersPath)
    /*useExpressServer has lots of options, can be viewed at node_modules\routing-controllers\RoutingControllersOptions.d.ts*/
    useExpressServer(this.app, {
      controllers: [HelloWorld],
    }
    );
  }
}