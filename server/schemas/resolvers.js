const { User, Group, GroupPost, Replies } = require('../models')

const { signToken } = require('../utils/auth')

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
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { user, token }
        }
    }
}

module.exports = resolvers