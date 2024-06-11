import { Express } from 'express';
import { BaseController } from './BaseController';
import { HomeController } from './HomeController';

const setupControllers = (app: Express, controllers: BaseController[]) =>
    controllers.forEach((controller) => controller.init(app));

export { BaseController, HomeController, setupControllers };
