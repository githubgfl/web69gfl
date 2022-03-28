import React from "react";
import { Table, TableProps,Dropdown,Menu} from 'antd'
import { User } from "./search-panel";
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import {Pin } from '../../components/pin'
import { useEditProject } from "utils/project";
import { ButtonNoPadding } from "components/lib";
import {useDispatch} from 'react-redux'
import { projectListActions} from './project-list-slice'
export interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
}
interface ListProps extends TableProps<Project> {
  refresh:()=>void,
  users: User[];
}
const List = ({ users, ...props }: ListProps) => {

  const dispatch=useDispatch()

  const {metate}=useEditProject()
  const pinProject=(id:number)=>(pin:boolean)=>metate({id,pin}).then(props.refresh)
  return <Table pagination={false} columns={[
    {

     title:<Pin checked={true} disabled={true}/>,
      render(value,project){
        return <Pin checked={project.pin} onCheckedChange={pinProject(project.id)

         
        }
        />
      }
    }
    ,
    
  {
    title: '名称',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render(value, project) {
      return <Link to={'projects/'+String(project.id)}>{project.name}</Link>
    }


  },
  {
    title: '部门',
    dataIndex: 'organization',
  }, {
    title: '负责人',
    render(value, project) {
      return <span>
        {users.find((user) => user.id === project.personId)?.name || "未知"}
      </span>
    },

  },
  {
    title: '创建',
    render(value, project) {
      return <span>
        {project.personId ? dayjs(project.personId).format('YYYY-MM-DD') : '无'}
      </span>
    },
    

  },
  {
  render(value,project){
    return (
      <Dropdown
      overlay={
          <Menu>
            <Menu.Item key={'edit'}>

            <ButtonNoPadding  onClick={()=>dispatch(projectListActions.openProjectModal())} type="link">编辑</ButtonNoPadding>
            </Menu.Item>

          </Menu>
        }
      >
        <ButtonNoPadding type="link">...</ButtonNoPadding>
       
      </Dropdown>
    )
  }
  }


  ]} {...props} />
}
export default List;
