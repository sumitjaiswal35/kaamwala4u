import config from './config';
import express from 'express';
import path from 'path';
const server = express();

server.listen(8080, function() {
  console.log('server started on 8080...');
});

server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, 'views'));

server.get('/', function(req, res) {
  res.send('Home Page');
});

server.get('/workers', function(req, res) {
  res.render('workers');
});