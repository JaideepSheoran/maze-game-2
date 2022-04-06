const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static("./public"));
//
//app.get("/", (req, res)=>{
//    res.send('Hello ;)');
//})

app.listen(port, ()=>{
    console.log(`Activated at ${port}`);
});