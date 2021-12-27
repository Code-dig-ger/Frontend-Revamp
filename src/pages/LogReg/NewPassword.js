import React from 'react'
import { Row, Col, Typography,Form, Input, Space, Button, Radio, Image, Divider  } from 'antd';
import image from "../../assets/changePass/changePass.svg"

function NewPassword(props) {
    const [form] = Form.useForm();
    const { Text, Link } = Typography;
    console.log(props);

    const typeStyles = {
        fontFamily: "'Poppins', sans-serif",
        color: "#ffffff",
        letterSpacing:"0.005rem"
    }
    const buttonStyles = {
        border:"#35AE9A",
        display:"block",
        fontWeight:"bold",
        letterSpacing:"0.05rem",
        width:"100%",
        borderRadius: "4px",
        fontSize:"0.8rem"
    }

    const inputStyles = {
        opacity: "0.5",
        fontSize: "0.8rem",
        color: "#ffffff",
        padding:"8px 11px"
    }

    const formItemStyles = {
        marginBottom:"0.8rem"
    }

    const overrideStyles = `
    .ant-input.ant-input-lg{
        background: rgb(0,0,0,0);
        font-size: 0.8rem;
        color: #ffffff;
        float: right;
        width: 30vw;
    }

    .ant-input .ant-input-lg:hover{
        border:1px solid #35AE9A;
    }
    .ant-form-vertical .ant-form-item-label, .ant-col-24.ant-form-item-label, .ant-col-xl-24.ant-form-item-label{
        padding: 0;
        opacity: 0.7;
    }
    .ant-input-affix-wrapper-lg{
        padding: 8px 11px;
        font-size: 0.8rem;
    }
    .ant-divider-horizontal.ant-divider-with-text-center::before,
    .ant-divider-horizontal.ant-divider-with-text-center::after
    {
        border-top: 1px solid #2D3748;
    }

    .ant-radio-checked .ant-radio-inner{
    border-color: rgb(0,0,0,0) !important ;
    }

    .ant-radio-checked .ant-radio-inner:after{
    background-color: #35AE9A;
    }

    .ant-radio:hover .ant-radio-inner {
    border-color: #2D3748 ;
    }
    .ant-input-affix-wrapper .ant-input-affix-wrapper-lg .ant-input-password{
        font-size:0.8rem;
    }

    .ant-input-affix-wrapper{
        background-color: rgb(0,0,0,0);
    }

    .ant-radio-inner{
        background-color: #2D3748;
        border-color:#2D3748;
    }
    .ant-input:focus, .ant-input:hover,.ant-input-lg:focus, .ant-input-lg:hover{
        border:1px solid #35AE9A;
    }
    `
    
    return (
        <>
        <style>
            {overrideStyles}
        </style>
        <div >
            <Row style={{ ...typeStyles, minHeight: "100vh" }}>
                <Col span={12} 
                type="flex"
                height="100vh"
                minWidth="22vw"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                    <Space>
                        <Row>
                            <Space direction='vertical'>
                                <Row>
                                    <Text style={{ ...typeStyles, fontSize:"1rem", fontWeight:"light"}} align="">Password Update</Text>
                                </Row>
                                <Row>
                                    <Text style={{ ...typeStyles, fontSize:"2rem", lineHeight:"1rem", fontWeight:"700", paddingBottom:"1rem"}}>Enter your new password</Text>
                                </Row>
                                    <Form
                                        layout={'vertical'}
                                        form={form}
                                        size='large'
                                        >
                                        <Form.Item 
                                            label={<label style={{ color: "white" }}>New Password</label>}
                                            labelCol={{ span: 24 }}
                                            style={{ color: "white"}}
                                            >
                                                <Input.Password
                                                placeholder="Password"
                                                style={{ ...inputStyles, background:"rgb(0,0,0,0)", color:"#fff"}}
                                                />
                                        </Form.Item>
                                        <Form.Item 
                                            label={<label style={{ color: "white" }}>Confirm Password</label>}
                                            labelCol={{ span: 24 }}
                                            style={{ color: "white" }}
                                            >
                                                <Input.Password
                                                placeholder="Password"
                                                style={{ ...inputStyles, background:"rgb(0,0,0,0)", color:"#fff"}}
                                                />
                                        </Form.Item>
                                        <Row gutter={32}>
                                            <Col span={12} >
                                                <Form.Item style={{ ...formItemStyles }}>
                                                    <Button type="primary" style={{ ...buttonStyles, background: "#2D3748" }}>Clear</Button>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12} >
                                                <Form.Item style={{ ...formItemStyles }}>
                                                    <Button type="primary" style={{ ...buttonStyles, background: "#35AE9A" }}>Update your password</Button>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form>
                            </Space>
                        </Row>
                    </Space>
                </Col>
                <Col span={12}  
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={ image } 
                    // style={{ transform:"translateX(15%)" }}
                        alt="Login" />
                </Col>
            </Row>
        </div>
        </>
    )
}

export default NewPassword
