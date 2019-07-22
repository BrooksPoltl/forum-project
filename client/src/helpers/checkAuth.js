

const checkAuth = () =>{
    const token = localStorage.getItem('authorization');
    if(token){
        return true
    }
    return false
}

export default checkAuth