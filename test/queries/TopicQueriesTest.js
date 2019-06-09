const schemaCode = require('../../backend/schema/schema')
const EasyGraphQLTester = require('easygraphql-tester')

describe('Topic Queries', ()=>{
    let tester;
    before(()=>{
        tester = new EasyGraphQLTester(schemaCode)
    })
    describe('topics',()=>{
        describe('basic topics query',()=>{
            it('should be valid query',()=>{
                const query = `
                    {
                        topics{
                            _id
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should be invalid query',()=>{
                const query = `
                    {
                        topics{
                            _id
                            us
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('accessing comments from topics',()=>{
            it('should be able to access comments',()=>{
                const query = `
                    {
                        topics{
                            _id
                            threads{
                                comments{
                                    _id
                                }
                            }
                            
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid comment value',()=>{
                const query = `
                    {
                        topics{
                            _id
                            threads{
                                comments{
                                    _id
                                    r
                                }
                            }
                            
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('accessing users from topics',()=>{
            it('should be able to access users',()=>{
                const query = `
                    {
                        topics{
                            _id
                            users{
                                _id
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid user value',()=>{
                const query = `
                    {
                        topics{
                            _id
                            users{
                                _id
                                r
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
        describe('accessing threads from topics',()=>{
            it('should be able to access threads',()=>{
                const query = `
                    {
                        topics{
                            _id
                            threads{
                                _id
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should not take invalid thread value',()=>{
                const query = `
                    {
                        topics{
                            _id
                            threads{
                                _id
                                r
                            }
                        }
                    }
                `   
                tester.test(false, query)
            })
        })
    })
    describe('topic',()=>{
        describe('basic topic query',()=>{

        })
        describe('accessing comments from topic',()=>{

        })
        describe('accessing topics from topic',()=>{

        })
        describe('accessing threads from topic',()=>{

        })
    })
})