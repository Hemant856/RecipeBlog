const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// App Routes

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploeRecipe);
router.get('/categories', recipeController.exploeCategories);
router.get('/categories/:id', recipeController.exploeCategoriesById);
router.post('/search', recipeController.searchRecipe);

router.get('/explore-latest', recipeController.exploeLatest);




module.exports = router;