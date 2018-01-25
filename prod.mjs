import Koa from 'koa';  
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import path from 'path';  
import middl from './app/server/src/middleware';
import expose from './expose.js';
const {__dirname} = expose;

import router from './app/server/src/routes'; 

/*eslint-disable no-console */

const app = new Koa();

console.log(__dirname);


app.use(middl.errorHandler());
app.use(serve(path.join(__dirname, 'app/client/dist')));
app.use(bodyParser());
app.use(router);




var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+port);
