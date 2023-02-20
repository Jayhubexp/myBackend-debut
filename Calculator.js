const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
console.log(require.body)
app.post("/", function(req, res){
let num1 = Number(req.body.num1);
let num2 = Number(req.body.num2);
let result = num1 + num2;
res.send("Your answer is " + result);
})

app.listen(5000, function(){
    console.log("Server is running on port 5000!");
});