//load mongoose to define model
var mongoose = require('mongoose');

// create model for todo
module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    done: Boolean
});