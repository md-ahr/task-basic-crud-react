const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 9000;

server.db = router.db;

server.use(router);

server.listen(port);
