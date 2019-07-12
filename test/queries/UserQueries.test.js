
const schemaCode = require('../../backend/schema/schema')
const EasyGraphQLTester = require('easygraphql-tester')
describe('User Queries', ()=>{
    let tester;
    before(()=>{
        tester = new EasyGraphQLTester(schemaCode)
    })
    describe('users', ()=>{
        describe('making basic query', ()=>{
            it('should be valid query',()=>{
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
            it('should be invalid query',()=>{
                const query = `
                    {
                        getusers{
                            _id
                            userName
                        }
                    }
                `
                tester.test(false, query)
            })
        })
        describe('accessing comments from users',()=>{
            it('Should allow you to access comments', ()=>{
                const query = `
                    {
                        users{
                            _id
                            userName
                            comments{
                                _id
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('Should not return userName on comments', ()=>{
                const query = `
                    {
                        users{
                            _id
                            userName
                            comments{
                                _id
                                userName
                            }
                        }
                    }
                `
                tester.test(false, query)
            })
        })
        describe('accessing threads from users', ()=>{
            it('Should allow you to access threads', ()=>{
                const query = `
                    {
                        users{
                            _id
                            userName
                            threads{
                                _id
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('Should not return userName on threads', ()=>{
                const query = `
                    {
                        users{
                            _id
                            userName
                            threads{
                                _id
                                userName
                            }
                        }
                    }
                `
                tester.test(false, query)
            })
        })
        describe('accessing topics from users', ()=>{
            it('Should allow you to access topics', ()=>{
                const query = `
                    {
                        users{
                            _id
                            userName
                            subscriptions{
                                _id
                            }
                        }
                    }
                `
                tester.test(true, query)
            })
            it('Should not return userName on topics', ()=>{
                const query = `
                    {
                        users{
                            _id
                            userName
                            topics{
                                _id
                                userName
                            }
                        }
                    }
                `
                tester.test(false, query)
            })
            
        })
        })
 
    describe('user', ()=>{
        describe('basic user query',()=>{
            it('should be valid query',()=>{
                const query = `
                        {
                            user(id: ""){
                                _id
                                userName
                            }
                        }
                    `
                tester.test(true, query)
            })
            it('should require id',()=>{
                const query = `
                        {
                            user(){
                                _id
                                userName
                            }
                        }
                    `
                tester.test(false, query)
            })
            it('cant take invalid value',()=>{
                const query = `
                        {
                            user(){
                                _id
                                userNae
                            }
                        }
                    `
                tester.test(false, query)
            })
        })
        describe('user comments access',()=>{
            it('should be able to get comments',()=>{
                const query = `
                        {
                            user(id: ""){
                                _id
                                userName
                                comments{
                                    _id
                                }
                            }
                        }
                    `
                tester.test(true, query)
            })
            it('cant take invalid comment value',()=>{
                const query = `
                        {
                            user(){
                                _id
                                userName
                                comments{
                                    _id
                                    r
                                }
                            }
                        }
                    `
                tester.test(false, query)
            })
        })
        describe('user threads access',()=>{
            it('should be able to get threads',()=>{
                const query = `
                        {
                            user(id: ""){
                                _id
                                userName
                                threads{
                                    _id
                                }
                            }
                        }
                    `
                tester.test(true, query)
            })
            it('cant take invalid thread value',()=>{
                const query = `
                        {
                            user(){
                                _id
                                userName
                                comments{
                                    _id
                                    r
                                }
                            }
                        }
                    `
                tester.test(false, query)
            })
        })
        describe('user topic access',()=>{
            it('should be able to get topics',()=>{
                const query = `
                        {
                            user(id: ""){
                                _id
                                userName
                                subscriptions{
                                    _id
                                }
                            }
                        }
                    `
                tester.test(true, query)
            })
            it('cant take invalid topic value',()=>{
                const query = `
                        {
                            user(){
                                _id
                                userName
                                topics{
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