import express from 'express';  
import path from 'path';  
import open from 'open';  
import compression from 'compression';  
import favicon from 'serve-favicon';

/*eslint-disable no-console */

const app = express();

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'app/client/dist')));
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+port);
