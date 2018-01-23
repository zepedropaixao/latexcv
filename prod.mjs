import express from 'express';  
import bodyParser from 'body-parser';
import path from 'path';  
import expose from './expose.js';
const {__dirname} = expose;

/*eslint-disable no-console */

const app = express();

console.log(__dirname);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'app/client/dist')));

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+port);
