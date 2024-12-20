const cluster = require("cluster");
const os = require("os");
const express = require("express"); // Missing import for express

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = 8001;
  app.get("/", (req, res) => {
    return res.json({ message: `Hello from Express Server ${process.pid}` });
  });

  app.listen(PORT, () => console.log(`Server Started At PORT :${PORT}`));
}
