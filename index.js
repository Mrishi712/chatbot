const express = require('express')
const ejs = require('ejs')

var app = express()


// Start the server
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

// inorder to use the js, css and images inside the public files
app.use(express.static('public'))


// this will tell the express to use the ejs as the view engine
app.set('view engine','ejs') 


//define a route
app.get('/', (req, res) => {
   res.render('pages/index')
});


