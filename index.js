
app.set('view engine', 'pug');
app.set('views','./views');

const express = require('express')

const app = express()
const path = require('path')
const WorkingTime = (req, res, next) => {
    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();
    if ( 5 < days < 1 || 22 < hours < 9 ) {
        app.get('/', function(req, res){
            res.render('WorkingHours');
         });    } else {
        next();
    }
};
 
app.use(WorkingTime,express.static(path.join(__dirname,'application')))

app.listen(5000,(err)=>{
    if(err){
        throw err
    }
    else{
        console.log('server is running...')
    }
})