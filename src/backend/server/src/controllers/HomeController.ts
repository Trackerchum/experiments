import { Express } from 'express';
import { BaseController } from './BaseController';

export class HomeController extends BaseController {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    setupRoutes = (app: Express) => {
        app.get(this.baseUrl, (req, res) => {
            // try {
            //     const user: User = req.body;
            //     if (!user) {
            //         return res.status(500).send("There was a problem registering new user: request body was null");
            //     }
            //     if (!UserMethods.fieldsValidForRegister(user)) {
            //         return res.status(400).send("All input is required");
            //     }
            //     const userExists = !!(await this.getUser(user.email));
            //     if (userExists) {
            //         return res.status(409).send("User Already Exist. Please Login");
            //     }
            //     const encryptedPassword = await bcrypt.hash(user.password, 10);
            //     const response = await this.client.set(user.email, JSON.stringify({
            //         firstName: user.firstName,
            //         lastName: user.lastName,
            //         email: user.email,
            //         password: encryptedPassword
            //     }));
            //     if (response !== 'OK') {
            //         return res.status(500).send("There was a problem saving new user");
            //     }
            //     return res.status(201).send('User successfully created.');
            // } catch (err) {
            //     return res.status(500).send(`There was a problem registering new user. ${err}`);
            // }
        });
    };
}
