import * as constants from './constants'
import axios from 'axios'

export const detailataaction=(result)=>({
       type:constants.change_datail_data,
       result:result
})


export const detaildata=(id)=>{
    return(dispatch)=>{     
    axios.get('/api/detail.json?id='+id).then((res)=>{
        const result=res.data.data;
        dispatch(detailataaction(result))
    }).catch(()=>{
        console.log('error1234567')
    })

}
}
