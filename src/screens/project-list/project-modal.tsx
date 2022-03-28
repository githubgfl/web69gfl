import {useDispatch,useSelector} from 'react-redux'
import {Drawer,Button} from 'antd'
import { projectListActions,selectProjectModalopen } from './project-list-slice'

export const ProjectModal=()=>{
    const dispatch=useDispatch()
    const projectModalOpen=useSelector(selectProjectModalopen)
    return (

        <Drawer
        closable={false}
        onClose={()=>dispatch(projectListActions.closeProjectModal())}
        visible={projectModalOpen}
        width={'100%'}

        >

    <h1> 咋回事？</h1>
    <Button onClick={()=>dispatch(projectListActions.closeProjectModal())}>关闭</Button>

        </Drawer>
    )
}