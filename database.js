const mongoose = require('mongoose');

// Define Recipe Schema
const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    ingredients: [String],
    instructions: [String],
    imageUrl: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favoriteRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

// Define Review Schema
const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
    postedAt: { type: Date, default: Date.now }
});

// Define Category Schema


// Create models from the schemas
const Recipe = mongoose.model('Recipe', recipeSchema);
const User = mongoose.model('User', userSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Recipe,
    User,
    Review
};