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