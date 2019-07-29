import gql from "graphql-tag";

const FETCH_TIMELINE = gql`
    query user($id: ID!){
        user(id: $id){
            username 
            subscriptions{
                title
                threads{
                    title
                    total
                }
            }
        }
    }
`
export default FETCH_TIMELINE