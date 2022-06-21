

/**
 * GET/
 * Homepage
 */
 require('../models/database');
 const Category = require('../models/Category');

exports.homepage = async(req, res) =>{

try{
    const limitNum = 5;
    const categories = await Category.find({}).limit(limitNum);

    //Whatever you send from here(as 2nd argument) that will be available in index.ejs(1st argument);
    res.render('index.ejs', {title : 'Cooking Blog - HomePage', categories});
} catch(error){
   res.status(500).send({message: error.message || "Error Occured"});

}

}





// async function insertDynamicCategoryData(){
//     try{
//        await Category.insertMany([
//         {
//             "name": "Thai",
//             "image": 'thai-food.jpg'
//         },
//         {
//             "name": "Thai",
//             "image": 'thai-food.jpg'
//         },
//         {
//             "name": "Thai",
//             "image": 'thai-food.jpg'
//         },
//         {
//             "name": "Thai",
//             "image": 'thai-food.jpg'
//         }
//     ]);

//     } catch{
//       console.log('err');
//     }
// }

// insertDynamicCategoryData();