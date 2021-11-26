import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card ,Row, Col ,Tabs ,Table ,Form, Input, Button} from 'antd';
const { TabPane } = Tabs;
 
interface MainPropsInterface{
    columns:any
    data:any
}
const style={
    marginTop:"30px",
}

class CardComp extends Component<MainPropsInterface,{}>{
    constructor(props:any){
        super(props);
        this.state={}
    }
    render(){
        return(
            <Row>
                <Col span={18} offset={3} style={style}>
                   <Card hoverable style={{ width: 1000 }}>
                   <Tabs type="card">
                        <TabPane tab="Form" key="1">
                                <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                    <Form.Item label="Username" name="username" rules={[{ message: 'Please input your username!' }]}><Input /></Form.Item>

                                    <Form.Item label="Age" name="age" rules={[{ message: 'Please input your age!' }]}><Input /></Form.Item>

                                    <Form.Item label="Qualification" name="qual" rules={[{ message: 'Please input your Qualification!' }]}><Input /></Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}><Button type="primary" htmlType="submit">Submit</Button></Form.Item>
                                </Form>
                        </TabPane>
                        <TabPane tab="Table" key="2">
                            <Table columns={this.props.columns} dataSource={this.props.data}/>
                        </TabPane>
                    </Tabs>
                   </Card>
                </Col>
            </Row>
        );
    }

}
export default CardComp;