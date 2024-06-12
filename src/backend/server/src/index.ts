import express from 'express';
import { HomeController, setupControllers } from './controllers';
import { corsMiddleware } from './middleware.ts/cors';

const app = express();
app.use(express.json());

app.use(corsMiddleware);

const port = 8000;

setupControllers(app, [new HomeController('/')]);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
