
import React from "react";

import {Input,Select,Form} from 'antd'
import { UserSelect } from "components/uearch-panel";
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token:string;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name?: string;
    personId?: number;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
const SearchPanel = ({ users, setParam, param }: SearchPanelProps) => {
  return (
    <Form   style={{marginBottom:'2rem'}}   layout={'inline'}>
    <Form.Item>
      <Input
        placeholder={"项目名"}
        type="text"
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name:evt.target.value,
          })
        }
      /></Form.Item>
      
<Form.Item>

  <UserSelect 
    defaultOptionName={"负责人"}
     value={param.personId} onChange={(value) => {
          setParam({
            ...param,
            personId: value,
          });
        }}/>
      {/* <Select
        value={param.personId}
        onChange={(value) => {
          setParam({
            ...param,
            personId: value,
          });
        }}
      > */}
        {/* <Select.Option value="">负责人</Select.Option>
        {users.map((user) => (
          <Select.Option key={user.id} value={String(user.id)}>
            {user.name}
          </Select.Option>
        ))}
      </Select> */}
      </Form.Item>


      </Form>
  );
};
export default SearchPanel;
