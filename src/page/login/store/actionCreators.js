import * as constants from './constants'
import axios from 'axios'

export const detailataaction=(result)=>({
    type:constants.change_LOGIN,
    result:result
})



export const login=(account,password)=>{
    return(dispatch)=>{     
    axios.get('/api/login.json?account=' + account+ '&password=' +password).then((res)=>{
        const result=res.data.data;
        console.log(result)
        dispatch(detailataaction(result))
    }).catch(()=>{
        console.log('error1234567')
    })

}
}

export const login1=()=>({
    type:constants.change_LOGIN1,
    value:false
})
