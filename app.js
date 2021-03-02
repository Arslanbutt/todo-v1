const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/',function(req,res){
  res.send("Yahallo!");
});



app.listen(3000,function(){
  console.log("App now up and running at 3000");
});
