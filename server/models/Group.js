const { Schema, model} = require('mongoose')

const Group = new Schema({
    groupName: {
        type: String,
        required: true,
        unique: true
    },
    techNeeded: [{
        type: String,
        unique: true
    }],
    aboutGroup: {
        type: String
    },
    category: {
        type: String,
        required:true
    },
    adminId: {
        type: 'String',
        required: true
    },
    groupPosts: [{
        type: Schema.Types.ObjectId,
        ref:'GroupPost'
    }],
    groupMembers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const groupSchema = model('Group', Group);
  
  module.exports = groupSchema;