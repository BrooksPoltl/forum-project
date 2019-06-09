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
            it('should be valid query',()=>{
                const query = `
                    {
                        topic(id: ""){
                            _id
                        }
                    }
                `
                tester.test(true, query)
            })
            it('should be invalid query',()=>{
                const query = `
                    {
                        topic(id: ""){
                            _id
                            us
                        }
                    }
                `   
                tester.test(false, query)
            })
            it('should have to take in ID',()=>{
                const query = `
                    {
                        topic{
                            _id
                        }
                    }
                `
                tester.test(false, query)
            })
        })
        describe('accessing comments from topic',()=>{
            it('should be able to access comments',()=>{
                const query = `
                    {
                        topic(id: ""){
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
                        topic(id: ""){
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
        describe('accessing users from topic',()=>{
            it('should be able to access users',()=>{
                const query = `
                    {
                        topic(id: ""){
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
                        topic(id: ""){
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
        describe('accessing threads from topic',()=>{
            it('should be able to access threads',()=>{
                const query = `
                    {
                        topic(id: ""){
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
                        topic(id: ""){
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
})