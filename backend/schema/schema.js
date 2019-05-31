const {mutation} = require('./mutations')
const graphql = require('graphql')
const {RootQuery} = require('./queries')
const {GraphQLSchema } = graphql
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})