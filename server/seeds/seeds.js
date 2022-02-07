const { User, Group, GroupPost, Replies} = require('../models')
const { Types: { ObjectId } } = require('mongoose')
const db = require('../config/connection')


let userId = [ 
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let groupId = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let postId = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let replyId = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]



const userData = [
    
    {
        _id: userId[0],
        userName: 'Alexander123',
        firstName: 'Alex',
        lastName: 'Leino',
        email: 'Alexander.Leino@yahoo.com',
        password: 'notMyPassword123',
        affiliatedGroups: [groupId[4]],
        isAdmin:  groupId[4]
    },
    {
        _id: userId[1],
        userName: 'QH123',
        firstName: 'Q',
        lastName: 'H',
        email: 'QueueDeveloper@gmail.com',
        password: 'NotTheBigQuigg123',
        affiliatedGroups: [groupId[0]]
    },
    {
        _id: userId[2],
        userName:'TheSecondAlexIsHere',
        firstName: 'Alex',
        lastName: 'TheSecondAlex',
        email: 'NotAlex2Password@gmail.com',
        password: 'NotAlex2Password',
        affiliatedGroups: [groupId[3]]
    },
    {
        _id: userId[3],
        userName:'Henrick123',
        firstName: 'Henrick',
        lastName: 'TheMan',
        email: 'HenrickWasHere@gmail.com',
        password: 'NotHenricksPassword123',
        affiliatedGroups: [groupId[4], groupId[0]]
    },
    {
        _id: userId[4],
        userName:'AlwaysFirst',
        firstName: 'Ricky',
        lastName: 'Bobby',
        email: 'RickyBobby@gmail.com',
        password: 'Number1',
        affiliatedGroups: [groupId[1]]
    },
    {
        _id: userId[5],
        userName: 'Not Batman',
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'NotBatMan@gmail.com',
        password: 'BrucyBoy123',
        affiliatedGroups: [groupId[0]]
    },   
]

const groupData = [
    {   
        _id: groupId[0],
        groupName: 'SourceFinder',
        techNeeded: ['Javascript', 'MongoDb,', 'Web3', 'BlockChain'],
        aboutGroup: 'This group is pretty new and we are looking for a lot of different personal please apply within.',
        category: 'Web Development',
        adminId: '1',
        
    },
    {   
        _id: groupId[1],
        groupName: 'Artists Are Us',
        techNeeded: ['GraphQL'],
        aboutGroup: 'This group is all about finding the best artists in LA.',
        category: 'Web Development',
        adminId: '2',
    },
    {
        _id: groupId[2],
        groupName: 'Football Fanatics',
        techNeeded: ['Material UI'],
        aboutGroup: 'Looking for people that are passionate about footaball.',
        category: 'Web Development',
        adminId: '3',
    },

    {
        _id: groupId[3],
        groupName: 'The CSS Freaks',
        techNeeded: ['Bootstrap'],
        aboutGroup: 'We are looking for someone who is a data junkie but who isnt afraid to get freaky in the sheets if you know what we are saying',
        category: 'Web Development',
        adminId:'4',
    },

    {
        _id: groupId[4],
        groupName: 'Pokemon Coders',
        techNeeded: ['MongoDb', 'Mongoose'],
        aboutGroup: 'We are looking for someone that loves pokemon as much as we do',
        category: 'Database',
        adminId: '5',
    },
]

const postData = [
    {
        _id: postId[0],
        postCreator: userId[0],
        postContent: 'This post was created by Alexander Leino and he is apart of the pokemon gourp',
        groupPoster: groupId[4]
    },
    {
        _id: postId[1],
        postCreator: userId[1],
        postContent: 'Ths post was created by QH',
        postOrigin: groupId[0]
    },
    {
        _id: postId[2],
        postCreator: userId[2],
        postContent: 'This Post was created by Alex2, because hes a football fanatic',
        postOrigin: groupId[2]
    },
    
    {
        _id: postId[3],
        postCreator: userId[3],
        postContent: 'This post was created by Henrick and he is apart of the Css Freaks group',
        postOrigin: groupId[3]
    },

    {
        _id: postId[4],
        postCreator: userId[4],
        postContent: 'This post was created by Ricky Bobby, and I am apart of the Artist Club',
        postOrigin: groupId[1]
    },
]

const replyData = [
    {
        _id: replyId[0],
        originalPost: postId[0],
        author: postId[0],
        body: 'Post 1',
    },
    {
        _id: replyId[1],
        originalPost: postId[1],
        author: postId[0],
        body: 'Post 2',
    },
    {
        _id: replyId[2],
        originalPost: postId[2],
        author: postId[2],
        body: 'Post 3',
    },
    {
        _id: replyId[3],
        originalPost: postId[4],
        author: postId[3],
        body: 'Post 4',
    },
    {
        _id: replyId[4],
        originalPost: postId[5],
        author: postId[4],
        body: 'Post 5',
    }
]

const seedData = async () => {
    try {

        await User.deleteMany({})
        await User.insertMany(userData)
        console.log('============ USERS SEEDED =============')

        await Group.deleteMany({})
        await Group.insertMany(groupData)
        console.log('============ Groups SEEDED =============')

        await GroupPost.deleteMany({})
        await GroupPost.insertMany(postData)
        console.log('============ Posts SEEDED =============')

        await Replies.deleteMany({})
        await Replies.insertMany(replyData)
        console.log('============ Replies SEEDED =============')

        process.exit(0)
        
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

seedData()