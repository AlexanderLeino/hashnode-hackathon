const { Schema, model} = require('mongoose')

const Group = new Schema({
    groupName: {
        type: String,
        required: true,
        unique: true
    },
    techNeeded: [{
        type: String
    }],
    aboutGroup: {
        type: String
    },
    category: {
        type: String,
        required:true
    },
    adminId: {
        type: String,
        required: true
    },
    groupMembers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const groupSchema = model('Group', Group);
  
  module.exports = groupSchema;