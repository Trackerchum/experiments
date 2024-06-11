import express from 'express';
import { HomeController, setupControllers } from './controllers';

const app = express();
app.use(express.json());

const port = 8000;

setupControllers(app, [new HomeController('/')]);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
