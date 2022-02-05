const { Schema, model } = require('mongoose')


const Post = new Schema ({
    postCreator: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    postDate: {
        type: Date,
        default: Date.now,
        unique: true
    },
    postContent: {
        type: String,
        required: true
    },
    postOrigin: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
    },
})

const Post = model('Post', Post);
  
module.exports = Post;