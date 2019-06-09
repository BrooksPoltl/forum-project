const schemaCode = require('../../backend/schema/schema')
const EasyGraphQLTester = require('easygraphql-tester')

describe('Thread Queries',()=>{
    let tester;
    before(()=>{
        tester = new EasyGraphQLTester(schemaCode)
    })
    describe('Threads', ()=>{
        describe('basic thread query',()=>{
            it('should be valid query',()=>{
                const query = `
                    {
                        threads{
                            _id
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should be invalid query',()=>{
                const query = `
                    {
                        threads{
                            _id
                            us
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access users from upvotes',()=>{
            it('should get user data',()=>{
                const query = `
                    {
                        threads{
                            _id
                            upvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        threads{
                            _id
                            upvotes{
                                userName
                                title
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access users from downvotes',()=>{
            it('should get user data',()=>{
                const query = `
                    {
                        threads{
                            _id
                            downvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        threads{
                            _id
                            downvotes{
                                userName
                                title
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access comments from threads',()=>{
            it('should get comment data',()=>{
                const query = `
                    {
                        threads{
                            _id
                            comments{
                                content
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        threads{
                            _id
                            comments{
                                content
                                title
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access topic from threads',()=>{
            it('should get topic data',()=>{
                const query = `
                    {
                        threads{
                            _id
                            topic{
                                name
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        threads{
                            _id
                            topic{
                                userName 
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
    })
    describe('Thread',()=>{
        describe('basic thread query',()=>{
            it('should be valid query',()=>{
                const query = `
                    {
                        thread(id: ""){
                            _id
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should be invalid query',()=>{
                const query = `
                    {
                        thread(id:""){
                            _id
                            us
                        }
                    }
                `   
                tester.test(false, query)
            })
            it('must have id param', ()=>{
                const query = `
                    {
                        thread{
                            _id
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access users from upvotes',()=>{
            it('should get user data',()=>{
                const query = `
                    {
                        thread(id: ""){
                            _id
                            upvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        threads(id: ""){
                            _id
                            upvotes{
                                userName
                                title
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access users from downvotes',()=>{
            it('should get user data',()=>{
                const query = `
                    {
                        thread(id: ""){
                            _id
                            downvotes{
                                userName
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        thread(id: ""){
                            _id
                            downvotes{
                                userName
                                title
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access comments from thread',()=>{
            it('should get comment data',()=>{
                const query = `
                    {
                        thread(id:""){
                            _id
                            comments{
                                content
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        thread(id:""){
                            _id
                            comments{
                                content
                                title
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('access topic from thread',()=>{
            it('should get topic data',()=>{
                const query = `
                    {
                        thread(id:""){
                            _id
                            topic{
                                name
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid value',()=>{
                const query = `
                    {
                        thread(id:""){
                            _id
                            topic{
                                userName 
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
    })
    
})