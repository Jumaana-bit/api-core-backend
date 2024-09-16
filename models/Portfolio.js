const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    image: String,
    title: String,
    link: String,
});

const Portfolio = mongoose.model('Wouessi', portfolioSchema,"Portfolio");

module.exports = Portfolio;