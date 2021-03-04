const express = require('express');
const bodyParser = require('body-parser');
//const popupS = require('popups');



const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

let items = [];

app.get('/', function(req, res) {
  let today = new Date();
  let currentDay = today.getDay();

  // let alert = require('alert');
  // alert("message");

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    typeOfDay: day,
    newListItem : items
  });

});

app.post('/',function(req,res){
  console.log("Post request is made");
   let item = req.body.newItem;
   if (item) {
     items.push(item);
   } res.redirect('/');


});

app.listen(3000, function() {
  console.log("App now up and running at 3000");
});
