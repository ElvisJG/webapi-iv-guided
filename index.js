require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`);
});

// When running locally, the IP is abstracted by localhost and the port can be hard coded to any port > 3000
// When deployed, heroku will assign an IP address - we cannot hardcode the port.
