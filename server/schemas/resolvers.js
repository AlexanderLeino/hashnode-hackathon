const { AuthenticationError } = require('apollo-server-express');
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
            try {
                console.log(args)
                const user = await User.create(args)
                const token = signToken(user)
                return { user, token }

            } catch (err) {
                console.log(err)
                return err
            }
        },
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email })

                if (!user) {
                    throw new AuthenticationError('No Profile with that email')
                }

                const correctPw = await user.isCorrectPassword(password)

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect password!');
                }
                const token = signToken(user)
                return { token, user }
            } catch (err) {
                console.log(err)
            }
        },
        updateUser: async (parent, { user }) => {
            console.log('I')
            const updatedUser = await User.findByIdAndUpdate(user._id, {
                $set: {
                    ...user
                }
            }, {
                new: true
            })
            return updatedUser
            // return updatedUser.populate([
            //     {
                    
            //     }
            // ])
        },
        createGroup: async (parent, args) => {
            try{
                console.log(args)
                const group = await Group.create(args)
                return group
            } catch (err){
                console.log(err)
                return err
            }
        }
    }
}

module.exports = resolvers