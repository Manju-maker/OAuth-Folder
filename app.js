const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const app = express();
app.use('/auth',authRoutes);
app.set('view engine','ejs');


 
app.get('/',(req,res) =>{
    res.render('home');
})

var server = app.listen(8081,()=>{

    console.log("My server is running");
})