
const schemaCode = require('../../../backend/schema/schema')
const EasyGraphQLTester = require('easygraphql-tester')

describe('Signup Mutation Test',()=>{
    let tester;
    before(()=>{
        tester = new EasyGraphQLTester(schemaCode);
    })
    it('signup should be valid',()=>{
        const mutation = `
            mutation signUp{
                signUp(firstName: "Brooks", lastName: "Poltl", email: "test@test.com", userName: "test", password: "1234"){
                    _id
                }
            }
        `
        tester.test(true, mutation)
    })
})