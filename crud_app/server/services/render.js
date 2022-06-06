

exports.homeRoutes = (req,res) => { 
    res.render('index');

}

/**
 * @description Root Route
 * @method GET / 
 */

exports.add_user= (req,res) =>{
    res.render('add_user');
}

/**
 * @description add user
 * @method GET / add-user
 */

exports.update_user = (req,res) =>{
    res.render('update_user');  
}

/**
 * @description for update user
 * @method GET / update-user
 */