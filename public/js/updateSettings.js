import axios from 'axios';
import {showAlert} from './alert';
export const updateSettings=async (data,type)=>{
    console.log('updateSetting',data)
    try{
        const url=type==='password'?'http://localhost:3000/api/v1/users/updateMyPassword':'http://localhost:3000/api/v1/users/updateMe'
        const res=await axios({
            method:'PATCH',
            url,
            data
        });
        if(res.data.status ==='success'){
            showAlert('success', `${type.toUpperCase()} updated successfully!` )
        }
        
        
//         console.log('Not',type,data)
//         const url=type==='password'?'http://localhost:3000/api/v1/users/updateMyPassword':'http://127.0.0.1:3000/api/v1/users/updateMe'
//         console.log(url)
//         const res=await axios({
//             method:'PATCH',
//             url,
//             data
                
        // });
        

//         if(res.data.status==='success'){
//             showAlert('success', `${type.toUpperCase()} updated successfully!`)
        // }
    }catch(err){
        showAlert('error',err.response.data.message)
    }
}