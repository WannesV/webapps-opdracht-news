var mongoose = require('mongoose');

var SourceSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    url: String,
    category: String,
    language: String,
    country: String,
});
mongoose.model('Source', SourceSchema);