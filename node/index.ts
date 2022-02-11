import bodyParser from 'body-parser';
import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.static('./src/static'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({ keys: ['sdcnsjkdcd'] }));
app.use(router);

const PORT = process.env.PORT || 80;

app.listen(PORT);

