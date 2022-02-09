const { gql } = require('apollo-server-express')


const typeDefs = gql`
    type User {
        _id: ID!
        userName: String!
        firstName: String
        lastName: String
        email: String!
        password: String!
        aboutMe: String
        GithubLink: String
        TwitterLink: String
        hashNodeLink: String
        LinkedinLink: String
        affiliatedGroups: [Group]
        isAdmin: Group
        skills: [SkillSet]
    }
    type Auth {
        token: ID!
        user: User
    }

    type Group {
        _id: ID!
        groupName: String!
        techNeeded: [String]
        aboutGroup: String
        category: String!
        adminId: String!
        groupPosts: [GroupPost]
        groupMembers: [User]
    }
    type GroupPost {
        _id: ID!
        postCreator: String!
        postDate: String!
        postContent: String!
        postOrigin: String!
    }
    type Reply {
        op: String!
        author: String!
        body: String!
        Date: String
    }

    type SkillSet {
        _id: ID!
        name: String!
    }

    input newUserInput {
        _id: ID!
        userName: String!
        firstName: String
        lastName: String
        email: String!
        password: String!
        aboutMe: String
        GithubLink: String
        TwitterLink: String
        hashNodeLink: String
        LinkedinLink: String
    }

    type Query {
        me(_id: ID!): User
        getOneGroup(_id: ID!) : Group
        getAllGroups : [Group]
    }

    type Mutation {
        createUser(userName: String!, password: String!, email: String!) : Auth
        login(email: String!, password: String!): Auth
    }
`
module.exports = typeDefs