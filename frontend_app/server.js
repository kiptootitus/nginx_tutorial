const express = require("express");
const app = express();
const path = require("path");

const name_app = process.env.NODE_ENV
app.use('/public', express.static(path.join(__dirname, 'public')));



app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("Request received");
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(` ${name_app} running on http://localhost:${PORT}`);
});
