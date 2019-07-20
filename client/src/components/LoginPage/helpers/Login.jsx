import gql from "graphql-tag";

const LOGIN = gql`
    mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
       _id
       token
    }
}
`
export default LOGIN