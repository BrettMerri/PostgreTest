import express from 'express';
import path from 'path';
const PORT = process.env.PORT || 3030;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
