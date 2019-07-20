import gql from "graphql-tag";

const SIGN_UP = gql`
    mutation signUp($username: String!, $email: String!, $password: String!){
    signUp( username: $username, email: $email, password: $password){
        errorMessage
    }
}
`
export default SIGN_UP