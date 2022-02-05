const { Schema, model } = require('mongoose')

const Group = new Schema({
    groupName: {
        type: String,
        required: true,
        unique: true,
    },
    techNeeded: [{
        type: String,
    }],

    aboutGroup: {
        type: String,
    },

    category: {
        type: String,
    },
    adminId: {
        type: 'String',
        required: true,
    }
})

const Group = model('Group', Group);
  
  module.exports = Group;