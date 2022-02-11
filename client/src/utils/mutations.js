import { gql } from '@apollo/client'
export const CREATE_USER = gql`
    mutation CreateUser($userName: String!, $email: String!, $password: String!) {
        createUser(userName: $userName, email: $email, password: $password) {
        token
        user{
            userName
        }
    }
}
`

export const LOG_IN = gql`
    mutation LogIn($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                userName
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateUser($user: UpdatedUser) {
        updateUser(user: $user) {
            _id
            firstName
            lastName
            userName
            email
            password
            aboutMe
            GithubLink
            TwitterLink
            hashNodeLink
            linkedinLink
    }
}
`

export const CREATE_GROUP = gql`
mutation CreateGroup($groupName: String!, $aboutGroup: String!, $category: String!, $adminId: String!, $techNeeded: [String], $groupMembers: [String]) {
    createGroup(groupName: $groupName, aboutGroup: $aboutGroup, category: $category, adminId: $adminId, techNeeded: $techNeeded, groupMembers: $groupMembers){
            groupName
            techNeeded
            aboutGroup
            category
            adminId
            groupMembers
        } 
    }
`