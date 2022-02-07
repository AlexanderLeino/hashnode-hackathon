const { Schema, model} = require('mongoose')

const SkillsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const SkillSet = model('SkillSet', SkillsSchema)

module.exports = SkillSet