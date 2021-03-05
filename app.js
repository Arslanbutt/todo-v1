const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');



const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

let items = [];

app.get('/', function(req, res) {

  let day = date.getDate();

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
