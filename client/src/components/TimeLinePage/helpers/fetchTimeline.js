import gql from "graphql-tag";

const FETCH_TIMELINE = gql`
    mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
       _id
       token
       errorMessage
    }
}
`
export default FETCH_TIMELINE