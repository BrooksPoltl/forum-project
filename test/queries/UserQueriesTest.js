const assert = require('chai').assert;
const app = require('../../server');
const fs = require('fs')
const path = require('path')
const schemaCode = require('../../backend/schema/schema')
const EasyGraphQLTester = require('easygraphql-tester')
describe('User Queries', ()=>{
    let tester;
    before(()=>{
        tester = new EasyGraphQLTester(schemaCode)
    })
    describe('users', ()=>{
        it('should return user',()=>{
            const query = `
                {
                    users{
                        _id
                        userName
                    }
                }
            `
            tester.test(true, query)
        })
    })
})