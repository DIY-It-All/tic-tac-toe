console.log("hello world!🌍!");
const path = require("path");
const fs = require("fs")
const express = require("express");
const app = express();
app.use(express.static("public"))

root = path.join(__dirname, "public");



app.get("/:filename", (req,res)=>{
    file = fs.readFileSync('web/public/' + req.params.filename)
    res.send(file)
})

app.get("/", (req, res) =>{
    res.sendFile(root+"/index.html");
})


const port = 80;
app.listen(port, ()=>{
    console.log(`listenening at port: ${port}`)
})