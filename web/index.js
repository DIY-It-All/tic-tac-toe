console.log("hello world!🌍!");
const express = require("express");
const app = express();
app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.send("index.html");
})



const port = 80;
app.listen(port, ()=>{
    console.log(`listenening at port: ${port}`)
})