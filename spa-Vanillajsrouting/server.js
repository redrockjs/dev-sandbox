const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "front-end", "static")))
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("front-end", "index.html"));
});

app.listen( 5000, () => {
    console.log("Server is running....")
})