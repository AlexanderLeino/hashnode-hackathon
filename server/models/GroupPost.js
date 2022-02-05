const { Schema, model } = require('mongoose')

const groupPost = new Schema ({
    postContent: {
        type: String,
    },
    
})

const User = model('groupPost', userSchema);
  
  module.exports = User;
