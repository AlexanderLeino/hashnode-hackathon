const { Schema, model } = require('mongoose')

const Reply = new Schema({
    originalPost: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    body: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
})

const postReplies = model('Reply', Reply)




























