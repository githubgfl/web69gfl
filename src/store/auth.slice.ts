import {User} from 'screens/project-list/search-panel'
import {createSlice} from '@reduxjs/toolkit'
import *as auth from 'auth-provider'
import {useDispatch} from 'react-redux'
import { AppDispath, RootState } from 'store'
import { AuthForm,bootstrapUser} from '../context/auth-context'
interface State{
    user:User|null
}
const initialState:State={
    user:null
}
export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser(state,action){
            state.user=action.payload
        }
    }
})

export const selectUser=(state:RootState)=>state.auth.user
const {setUser}=authSlice.actions
export const login= (from:AuthForm)=>(dispatch:AppDispath)=>auth.login(from).then(user=>dispatch(setUser(user)))
export const register= (from:AuthForm)=>(dispatch:AppDispath)=>auth.register(from).then(user=>dispatch(setUser(user)))
export const logout= ()=>(dispatch:AppDispath)=>auth.logout().then(user=>dispatch(setUser(null)))
export const bootstrap=()=>(dispatch:AppDispath)=>bootstrapUser().then(user=>dispatch(setUser(user)))