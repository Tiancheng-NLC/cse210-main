import axios from 'axios'

class DataService{
    login(email,password){
        const data={
            Email:email,
            Password:password,
        }
        return new Promise((resolve,reject)=>{
            try{
                const response=axios.post('http://localhost:5173/api/verifyUser',data);
                resolve(response);
            }
            catch(err){
                reject(err)
            }
        })
    }
    signup(email,password){
        const data={
            Email:email,
            Password:password,
        }
        return new Promise((resolve,reject)=>{
            try{
                const response=axios.post('http://localhost:5173/api/createUser',data);
                resolve(response);
            }
            catch(err){
                reject(err)
            }
        })
    }
    // Yifei 2/15: add forgot password

    // forgot() {}

    // Yifei 2/15: reset password moved to dropdown
    // reset(cur_pwd,password){
    //     const data={
    //         Cur_pwd:cur_pwd,
    //         Password:password,
    //     }
    //     return new Promise((resolve,reject)=>{
    //         try{
    //             const response=axios.post('http://localhost:5173/api/resetpassword',data);
    //             resolve(response);
    //         }
    //         catch(err){
    //             reject(err)
    //         }
    //     })
    // }
}

export default new DataService;