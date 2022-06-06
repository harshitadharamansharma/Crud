const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path'); //  path module of node application ; no need to install using npm bcz path module is inbuilt in node application you just need to reqyuire it

const connectDB = require('./server/database/connection');
 
const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
   
//log requests
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

  
// parse request to body-parser ----object extended...... property true
app.use(bodyparser.urlencoded({extended:true}))

//set view engine (this is parameter )----- embedded java script-= type of view engine-ejs,html,pug
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))// path in second parameter; after coma folder name putting all your ejs file

//load assets -- using middleware method - use method and specify method

app.use('/css',express.static(path.resolve(__dirname,"assets/css"))) //css/style.css
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// current project directory name
//css/style.css

//load routers
app.use('/',require('./server/routes/router'))

/*

app.get('/', (req, res) => {
    res.send("Crud Application hahahoho hello world");

})

*/
console.log("hiii hello world");
app.listen(3000, () => { console.log('Server is running on http://localhost:${3000}') });
 
