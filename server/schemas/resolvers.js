const { User, Group, GroupPost, Replies } = require('../models')

const resolvers = {
    Query: {
        me: async (parent, { _id }) => {
            const user = await User.findById(_id).populate('skills')
            return user
        },
        getOneGroup: async (parent, {_id}) => {
            const group = await Group.findById(_id)
            return group
        },
        getAllGroups: async (parent, _) => {
            const allGroups = await Group.find()
            return allGroups
        }
    }
}

module.exports = resolvers