import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Typography , Layout } from 'antd';
const { Header, Footer , Content } = Layout;
const { Title } = Typography;
 
const columns= [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Qualification',
      dataIndex: 'qual',
      key: 'qual',
    },
  ];
  
  const data = [
    {key: '1',name: 'Tarantino',age: 55,qual: 'Mexico',},
    {key: '2',name: 'Kumararaja',age: 35,qual: 'Chennai',},
    {key: '3',name: 'Ram',age: 45,qual: 'Taramani',},
    {key: '4',name: 'Bruce Wayne',age: 32,qual: 'Gotham City',},

  ];

class LayComp extends Component<{},{}>{
    render(){
        return(
            <Layout>
                <Header><Title className="App" style={{color:"white"}}>Ant Design</Title></Header>
                <Content>
                    <Card columns={columns} data={data}/>
                </Content>
                <Footer>Pyps-Mohamed Ibrahim</Footer>
            </Layout>
        );
    }

}
export default LayComp;