var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended:true }));

var dogs = [ {
  name: 'vini',
  breed:'cvhjkl'
}]

app.get('/', function(req, res, next) {
  res.send('hey')
});

app.get('/dogs', function(req, res) {
  res.render('dogs', {
    dogs: dogs
  });
})

app.get('/dogs/add', function(req,res) {
  res.render('newdog');
})
app.post('/dogs/add', function(req,res) {
  console.log(req.body.dogname);
  let dogDetails = {
    name: req.body.dogname,
    breed: req.body.dogbreed
  }
  dogs.push(dogDetails);
  res.redirect('/dogs')
})

let port = (process.env.PORT || '3000')
app.listen(port ,process.env.IP,  function () {
  console.log('YelpCamp Server Running on port 3000');
});