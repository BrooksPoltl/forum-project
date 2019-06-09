const schemaCode = require('../../backend/schema/schema')
const EasyGraphQLTester = require('easygraphql-tester')

describe('User Mutations', ()=>{
    let tester;
    before(()=>{
        tester = new EasyGraphQLTester(schemaCode)
    })
    describe('Signup', ()=>{
    })
    describe('Login',()=>{

    })
    describe('Delete User', ()=>{

    })
})