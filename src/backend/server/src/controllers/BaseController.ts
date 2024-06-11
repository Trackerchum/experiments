import { Express } from 'express';

export abstract class BaseController {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    init = (app: Express) => {
        this.setupRoutes(app);
    };

    abstract setupRoutes: (app: Express) => void;
}
