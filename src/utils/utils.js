import React from 'react';
import { Select } from 'antd';



export default{
    formatedate(time){
        if(!time) return "";
        let date=new Date(time);
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()

       
    },
    pagination(data,callback) {
    return {
      onChange: current => callback(current), //页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,
      showTotal: () => {
        return `共${data.result.total}条`
      },
      showQuickJumper: true
    }
  }, 
  
  getOptionList(data) {
    let { Option } = Select;
    if(!data) {
      return []
    };
    let options = []
    data.map(item => 
      options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    )
    return options
  },

  // selectedRowKeys的封装
  updateSelectedItem(selectedRowKeys,selectedItem,selectedIds) {
    if(selectedIds){
      this.setState({
        selectedRowKeys,
        selectedItem,  //选中的那一行
        selectedIds
      })
    }else{
      this.setState({
        selectedRowKeys,
        selectedItem  //选中的那一行
      })
    }
  }


}


