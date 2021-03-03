const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
  var today = new Date();
  var currentDay = today.getDay();

  var day = "";

  if(currentDay === 0 || currentDay === 6){
    day = "Free";
  }else {
    day = "Working";
  }

  res.render("list",{typeOfDay:day});

});



app.listen(3000,function(){
  console.log("App now up and running at 3000");
});
