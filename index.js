const express = require('express');
const path = require('path')
const port = process.env.PORT || 3000;
const app = express();

const s_path = path.join(__dirname,'./public')
app.use(express.static(s_path))
// console.log(s_path)

app.listen(port,()=>{
    console.log("express running")
})