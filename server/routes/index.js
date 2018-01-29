import express from 'express';
import ssr from './ssr';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/*', ssr);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Hello World listening on port 3000!');
});
