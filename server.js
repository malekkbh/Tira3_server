const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8800;
const server = http.createServer(app);

app.listen(port)

module.exports = server;