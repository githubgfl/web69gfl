import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
 export const homedataaction=(result)=>({
        type:constants.change_home_data,
        result:result

})
export const homedataaction1=(result,nextPage)=>({
       type:constants.change_home_data1,
       result:fromJS(result.articleList),
       nextPage
})


export const homedata=()=>{
    return(dispatch)=>{     
    axios.get('/api/home.json').then((res)=>{
        const result=res.data.data;
        dispatch(homedataaction(result))
    }).catch(()=>{
        console.log('error')
    })

}
}
export const getMoreList=(page)=>{
       return(dispatch)=>{
    axios.get('/api/homeList.json?page='+page).then((res)=>{
        const result=res.data.data;
        dispatch(homedataaction1(result,page+1))
    }).catch(()=>{
        console.log('error')
    })
}
}


export const toggleTopShow=(show)=>({
         
          type:constants.gleTopShow,
          show
})
   