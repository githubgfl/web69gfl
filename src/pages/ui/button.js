import React, { Component } from 'react'

import { Card, Button,Space,Radio}  from 'antd';
import { DownloadOutlined ,LeftOutlined,RightOutlined,PoweroffOutlined,SearchOutlined,DeleteOutlined,WechatOutlined,QqOutlined,WeiboOutlined,AlipayCircleOutlined,TaobaoCircleOutlined} from '@ant-design/icons';
import './button.less'
export default class button extends Component {
  state = {
    loadings: [],
    size: 'large'
  };
  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    const { loadings } = this.state;
    const { size } = this.state;
    return (
      <div>
        <Card title="基础按钮"  className='card'>
          <Button type="primary">主按钮</Button>
          <Button>次按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
        </Card>
        <Card title="图形按钮"  className='card' >
        
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
         <Button type="primary" shape="circle" icon={<SearchOutlined />} />
         <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
         <Button type="primary" shape="circle" icon={<WechatOutlined />} />
         <Button type="primary" shape="circle" icon={ <QqOutlined />} />
         <Button type="primary" shape="circle" icon={<WeiboOutlined />} />
         <Button type="primary" shape="circle" icon={<AlipayCircleOutlined />} />
         <Button type="primary" shape="circle" icon={ <TaobaoCircleOutlined />} />


        </Card>

        <Card title="loading进行中"  className='card'>
        <Space >
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space >
          <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => this.enterLoading(1)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => this.enterLoading(2)}
          />
        </Space>


        </Card>

      
        <Card title='按钮组'  className='card'>
          <Button.Group>
          <LeftOutlined />
          
          <LeftOutlined />
            <Button type='primary' icon={<LeftOutlined />}>返回</Button>
            <Button type='primary' icon={<RightOutlined />}>前进</Button>
          </Button.Group>
        </Card> 
     
        
          <Card>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>

          </Card>





      </div>
    )
  }
}
