const schemaCode = require('../../backend/schema/schema')
const EasyGraphQLTester = require('easygraphql-tester')

describe('Comment Queries', ()=>{
    let tester;
    before(()=>{
        tester = new EasyGraphQLTester(schemaCode)
    })
    describe('Comments', ()=>{
        describe('basic comments query', ()=>{
            it('should be valid query', ()=>{
                const query = `
                    {
                        comments{
                            _id
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should be invalid query', ()=>{
                const query = `
                    {
                        comments{
                            _id
                            das
                        }
                    }
                `
                tester.test(false, query)
            })
        })
        describe('access users from upvotes', ()=>{
            it('should be able to access user data',()=>{
                const query = `
                    {
                        comments{
                            _id
                            upvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true,query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        comments{
                            _id
                            upvotes{
                                userNam
                            }
                        }
                    }
                `
                tester.test(false,query)
            })
        })
        describe('access users from downvotes', ()=>{
            it('should be able to access user data',()=>{
                const query = `
                    {
                        comments{
                            _id
                            downvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true,query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        comments{
                            _id
                            downvotes{
                                userNam
                            }
                        }
                    }
                `
                tester.test(false,query)
            })
        })
        describe('access thread', ()=>{
            it('should be able to access thread data',()=>{
                const query = `
                    {
                        comments{
                            _id
                            thread{
                                title
                            }
                        }
                    }
                `
                tester.test(true,query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        comments{
                            _id
                            thread{
                                titl
                            }
                        }
                    }
                `
                tester.test(false,query)
            })
        })
    })
    describe('Comment', ()=> {
        describe('basic comments query', ()=>{
            it('should be valid query', ()=>{
                const query = `
                    {
                        comment(id:""){
                            _id
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should be invalid query', ()=>{
                const query = `
                    {
                        comment(id: ""){
                            _id
                            das
                        }
                    }
                `
                tester.test(false, query)
            })
            it('should take id', ()=>{
                const query = `
                    {
                        comment{
                            _id
                        }
                    }
                `
                tester.test(false, query)
            })
        })
        describe('access users from upvotes', ()=>{
            it('should be able to access user data',()=>{
                const query = `
                    {
                        comment(id:""){
                            _id
                            upvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true,query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        comment(id:""){
                            _id
                            upvotes{
                                userNam
                            }
                        }
                    }
                `
                tester.test(false,query)
            })
        })
        describe('access users from downvotes', ()=>{
            it('should be able to access user data',()=>{
                const query = `
                    {
                        comment(id:""){
                            _id
                            downvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true,query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        comment(id:""){
                            _id
                            downvotes{
                                userNam
                            }
                        }
                    }
                `
                tester.test(false,query)
            })
        })
        describe('access thread', ()=>{
            it('should be able to access thread data',()=>{
                const query = `
                    {
                        comment(id:""){
                            _id
                            thread{
                                title
                            }
                        }
                    }
                `
                tester.test(true,query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        comment(id:""){
                            _id
                            thread{
                                titl
                            }
                        }
                    }
                `
                tester.test(false,query)
            })
        })
    })
})