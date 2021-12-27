import React, { useState } from 'react'
import { Row, Col, Typography,Form, Input, Space, Button, Radio, Image, Divider  } from 'antd';
// import { EyeInvisibleOutlined, EyeTwoTone, GoogleOutlined } from '@ant-design/icons';
import image from "../../assets/signup/register.svg"


function Register(props) {
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
        width:"100%",
        borderRadius: "8px",
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
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={ image } 
                    style={{ transform:"translateX(15%)" }}
                        alt="Login" />
                </Col>
                <Col span={12} 
                type="flex"
                // align="center"
                // justify="center"
                height="100vh"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "22vw" }}>
                    
                    <Space direction='vertical'>
                        <Row>
                            <Space direction='vertical'>
                                <Row>
                                    <Text style={{ ...typeStyles, fontSize:"1rem", fontWeight:"light", letterSpacing:"0.01rem"}} align="">Welcome, coder</Text>
                                </Row>
                                <Row>
                                    <Text style={{ ...typeStyles, fontSize:"2rem", lineHeight:"1rem", fontWeight:"700", paddingBottom:"1rem"}}>Register for your account</Text>
                                </Row>
                                    <Form
                                        layout={'vertical'}
                                        form={form}
                                        size='large'
                                        >
                                        <Form.Item 
                                            label={<label style={{ color: "white" }}>Email Address</label>}
                                            style={{ ...formItemStyles, color: "white", marginBottom:"15px", padding:"0px" }}
                                            >
                                            <Input placeholder="Email Address" 
                                            style={{ ...inputStyles, color:"#fff"}}
                                            />
                                        </Form.Item>
                                        <Form.Item 
                                            label={<label style={{ color: "white" }}>Username</label>}
                                            style={{ ...formItemStyles, color: "white", marginBottom:"15px", padding:"0px" }}
                                            >
                                            <Input placeholder="Username" style={{ ...inputStyles, color:"#fff"}} />
                                        </Form.Item>
                                        
                                        <Form.Item 
                                            label={<label style={{ color: "white" }}>Password</label>}
                                            labelCol={{ span: 24 }}
                                            >
                                                <Input.Password
                                                placeholder="Password"
                                                style={{ ...inputStyles, color:"#fff"}}
                                                />
                                        </Form.Item>
                                        {/* <Row justify="space-between" style={{ paddingBottom:"1rem"}}>
                                            <Col span={12} align={'left'}>
                                                <Radio>
                                                    <Text style={{ ...typeStyles, }}>
                                                        Remember Me
                                                    </Text>
                                                </Radio>
                                            </Col>
                                            <Col span={12} align={'right'}>
                                                <Link href="https://ant.design" target="_blank">
                                                    <Text style={{ ...typeStyles}}>
                                                        Forgot Password?
                                                    </Text>
                                                </Link>
                                            </Col>
                                        </Row> */}
                                        <Form.Item style={{ ...formItemStyles }}>
                                            <Button type="primary" style={{ ...buttonStyles, background: "#35AE9A", fontWeight:"700", letterSpacing:"0.05rem" }}>Login Now</Button>
                                        </Form.Item>
                                        {/* <Form.Item style={{ ...formItemStyles }}>
                                            <Button type="primary" style={{ ...buttonStyles, background: "#2D3748" }}> <GoogleOutlined align='center' style={{ fontSize: "18px" }}/>Or sign-in with google</Button>
                                        </Form.Item> */}
                                    </Form>
                            </Space>
                        </Row>
                        <Divider style={{ color:"#fff", fontWeight:"bold", letterSpacing:"0.1rem",  opacity:"0.5", fontSize:"15px"}}>or</Divider>
                        <Row style={{ width:"100%"}}>
                            <Col style={{ width:"100%"}}>
                                <Space style={{ width:"100%", justifyContent:"center" }}>
                                    <Text style={{ ...typeStyles, opacity:"0.8"}} >
                                        Already have an account..? <Link href="http://localhost:3000/login" style={{ color: "#35AE9A"}}>Login to your account</Link>
                                    </Text>
                                </Space>
                            </Col>
                        </Row>
                    </Space>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Register
