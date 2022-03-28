import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './auth.slice'
import { projectListSlice } from 'screens/project-list/project-list-slice'
export const rootReducer={
projectList: projectListSlice.reducer,
auth:authSlice.reducer

}

export const store=configureStore({
reducer:rootReducer

})
//  为什么不用useDispatch获得dispath  因为useDispatch只能在组件里使用  ，所哟用下面这个方法获得dispatch
export type AppDispath=typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>