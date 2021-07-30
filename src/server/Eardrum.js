const app = require("./server");
// Setup Server
const port = 3000;
// Spin up the server
const server = app.listen(port, listening);
// Callback to degug
function listening() {
  console.log("server running");
  console.log(`running on localhost ${port}`);
}
