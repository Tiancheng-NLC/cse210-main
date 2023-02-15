import axios from 'axios'

class DataService{
    login(email,password){
        const data={
            Email:email,
            Password:password,
        }
        return new Promise((resolve,reject)=>{
            try{
                const response=axios.post('api/verifylogin',data);
                resolve(response);
            }
            catch(err){
                reject(err)
            }
        })
    }
}

export default new DataService;