const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


import {Request, Response} from 'express';

app.use('/assets',express.static(path.join(__dirname, 'public/assets')));
app.use('/',express.static(path.join(__dirname, 'public')));



app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})