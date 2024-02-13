import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import handlerFunctions from './controller.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const { getProjects } = handlerFunctions;

app.get('/api/projects', getProjects)

ViteExpress.listen(app, 1105, () => console.log(`Server running on http://localhost:1105`));