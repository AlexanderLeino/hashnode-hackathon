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

]