

/**
 * GET/
 * Homepage
 */

exports.homepage = async(req, res) =>{

    res.render('index.ejs', {title : 'Cooking Blog - HomePage'});




}