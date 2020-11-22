const http = require('http');
const app = require('./backend/app');
const port = process.env.PORT || 3000 ;

app.set('port' , port);
//we will create a server
const server =http.createServer(app)
server.listen(port);

