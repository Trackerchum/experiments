import { Express } from 'express';
import { BaseController } from './BaseController';

export class HomeController extends BaseController {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    setupRoutes = (app: Express) => {
        app.get(this.baseUrl, (request, response) => {
            console.log('query: ', request.query);
            return response.status(200).send({ body: 'Endopint returned successfully.' });
        });
    };
}
