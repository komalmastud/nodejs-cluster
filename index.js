const express = require("express");

const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  return res.json({ message: `hello from Express Server ${process.pid}` });
});

app.listen(PORT, () => console.log(`Server Started At PORT :${PORT}`));
