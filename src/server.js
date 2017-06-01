import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import config from './config/config';
import expressConfig from './config/express';
import auth from './config/auth';
import routesConfig from './config/routes';
import aclConfig from './config/acl';

const app = express();

app.use(morgan('dev'));

// initialize express
expressConfig(app);

app.use(auth.initialize());
auth.setJwtStrategy();


mongoose.connect(config.db, (err) => {
    if (err) {
        console.log(`[MongoDB] Failed to connect. ${err}`);
    } else {
        console.log(`[MongoDB] connected: ${config.db}`);
        authorizationSetup();
    }
});

app.listen(config.apiPort, () => {
    console.log(`[Server] listening on port ${config.apiPort}`);
});

function authorizationSetup() {
    aclConfig(mongoose.connection.db);

    // initialize api
    routesConfig(app);
}


export default app;
