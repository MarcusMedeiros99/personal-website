const express = require('express');
const app = express();
const path = require('path');


import {Request, Response} from 'express';

app.use('/assets',express.static(path.join(__dirname, 'public/assets')));
app.use('/',express.static(path.join(__dirname, 'public')));



app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html');
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = "8000";
}
app.listen(port);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})