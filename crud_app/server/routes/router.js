const express = require('express')
// consty app = express()
const route = express.Router()

const services =require('../services/render');
const conteroller = require('../controller/controller');
/**
 * @description Root Route
 * @method GET /
 * 
 */
route.get('/',services.homeRoutes);

/**
 * @description Root Route
 * @method GET / add-user
 * 
 */

route.get('/add-user',services.add_user);


/**
 * @description Root Route
 * @method GET / update-user
 * 
 */

route.get('/',services.update_user);

/*
route.get('/', (req, res) => {
    res.render('index.ejs');   // this allows us to render an html file

})


route.get('/add-user', (req, res) => {
    res.render('add_user');   // this allows us to render an html file

})

route.get('/update-user', (req, res) => {
    res.render('update_user');   

})
*/

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.post('/api/users/:id',controller.delete);

module.exports = route