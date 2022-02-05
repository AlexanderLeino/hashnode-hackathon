const { User } = require('../models/User')
const { Types: { ObjectId } } = require('mongoose')

let userIds = [ 
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

const userData = [
    
    {
        _id: userIds[0],
        firstName: 'Alex',
        lastName: 'Leino',
        email: 'Alexander.Leino@yahoo.com',
        password: 'notMyPassword123',
    },
    {
        _id: userIds[1],
        firstName: 'Q',
        lastName: 'H',
        email: 'QueueDeveloper@gmail.com',
        password: 'NotTheBigQuigg123',
    },
    {
        _id: userIds[2],
        firstName: 'Alex',
        lastName: 'TheSecondAlex',
        email: 'NotAlex2Password@gmail.com',
        password: 'NotAlex2Password',
    },
    {
        _id: userIds[3],
        firstName: 'Henrick',
        lastName: 'TheMan',
        email: 'HenrickWasHere@gmail.com',
        password: 'NotHenricksPassword123',
    },
    {
        _id: userIds[4],
        firstName: 'Ricky',
        lastName: 'Bobby',
        email: 'RickyBobby@gmail.com',
        password: 'Number1',
    },
    {
        _id: userIds[5],
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'NotBatMan@gmail.com',
        password: 'BrucyBoy123',
    },   
],

const groupData = [
    {
        groupName: 'SourceFinder',
        techNeeded: ['Javascript', 'MongoDb,', 'Web3', 'BlockChain'],
        aboutGroup: 'This group is pretty new and we are looking for a lot of different personal please apply within.',
        category: 'Web Development',
        adminId: '1',
        
    },
    {
        groupName: 'Artists Are Us',
        techNeeded: ['GraphQL'],
        aboutGroup: 'This group is all about finding the best artists in LA.',
        category: 'Web Development',
        adminId: '2',
    },
    {
        groupName: 'Football Fanatics',
        techNeeded: ['Material UI'],
        aboutGroup: 'Looking for people that are passionate about footaball.',
        category: 'Web Development',
        adminId: '3',
    },

    {
        groupName: 'The CSS Freaks',
        techNeeded: ['Bootstrap'],
        aboutGroup: 'We are looking for someone who is a data junkie but who isnt afraid to get freaky in the sheets if you know what we are saying',
        category: 'Web Development',
        adminId:'4',
    },

    {
        groupName: 'Pokemon Coders',
        techNeeded: ['MongoDb', 'Mongoose'],
        aboutGroup: 'We are looking for someone that loves pokemon as much as we do',
        category: 'Database',
        adminId: '5',
    }
],

