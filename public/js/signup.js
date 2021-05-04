/* eslint-disable*/
import axios from 'axios';
import {showAlert} from './alert'
export const signup=async (data)=>{
    console.log('signup',data)
    try{
        const res=await axios({
            method:'POST',
            url:'http://localhost:3000/api/v1/users/signup',
            data
        });
        console.log('signup',res)

        if(res.data.status==='success'){
            showAlert('success','Signup successfully');
            window.setTimeout(()=>{
                location.assign('/')
            },1500)
        }
        console.log(res);

    }catch(err){
        showAlert('error from signup page',err.response)
    }
    
};

