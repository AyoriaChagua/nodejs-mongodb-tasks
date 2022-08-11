import express from "express";
import {create} from "express-handlebars";
import indexRoute from './routes/index.routes';
import path from 'path';
import morgan from "morgan";
import { allowedNodeEnvironmentFlags } from "process";
const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(
    '.hbs',
    create({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',  
    extname: '.hbs',
}).engine
);

app.set('view engine', '.hbs');


 //Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));


//Routes
app.use(indexRoute);

//static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;