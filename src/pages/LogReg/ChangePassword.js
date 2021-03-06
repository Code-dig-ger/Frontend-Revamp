import { useState, useEffect } from 'react'
import { NewPassRequest } from '../../actions/auth.actions'
import useWindowDimensions from '../../components/useWindowDimensions'
import { Row, Col, Typography, Form, Input, Space, Button, message } from 'antd'
import image from '../../assets/changePass/changePass.svg'
import * as styles from '../../assets/changePass/overrideStyles'

function ChangePassword(props) {
  const [form] = Form.useForm()
  const [oldpass, setOldPass] = useState('')
  const [newpass, setNewPass] = useState('')
  const [confirmpass, setConfirmPass] = useState('')
  const { Text, Link } = Typography
  const [svg, setSvg] = useState(false)
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    if (width < 1250) {
      setSvg(false)
    } else {
      setSvg(true)
    }
  }, [width])
  console.log(props)

  const {
    typeStyles,
    buttonStyles,
    inputStyles,
    formItemStyles,
    overrideStyles,
  } = styles

  // This handle function could be used for NewPassword file as it uses the logic for that endpoint
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   if (newpass.length === 0 || confirmpass === 0) {
  //     alert('Fields should not remain blank')
  //     return
  //   }
  //   if (newpass !== confirmpass) {
  //     alert('Passwords do not match')
  //     return
  //   }
  //   const currentUrl = window.location.href
  //   const temp = currentUrl
  //   const token = currentUrl.split('token=')[1]

  //   const uidb = temp.split('uidb64=')[1]
  //   let myuidb = ''
  //   let i = 0
  //   while (uidb[i] !== '&') {
  //     i++
  //   }
  //   myuidb = uidb.substring(0, i)
  //   passreqEmail(pass, token, myuidb)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.status === 'OK') {
  //         console.log(data.result)
  //         window.location = '/login'
  //       } else {
  //         alert(JSON.stringify(data))
  //       }
  //     })
  // }

  function handleSubmit(e) {
    e.preventDefault()
    if (oldpass.length === 0 || newpass.length === 0 || confirmpass === 0) {
      alert('Fields should not remain blank')
      return
    }
    if (newpass !== confirmpass) {
      alert('Passwords do not match')
      return
    }
    const creds = JSON.parse(localStorage.getItem('creds'))
    const acc = creds.access
    NewPassRequest(oldpass, newpass, acc)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.status === 'OK') {
          console.log(data.result)
          message.success('Passwords changed', 1, () => {
            window.location = '/login'
          })
        } else {
          message.error("Password doesn't match", 1)
          alert(JSON.stringify(data))
        }
      })
  }

  return (
    <>
      <style>{overrideStyles}</style>
      <div>
        <Row style={{ ...typeStyles, minHeight: '90vh' }}>
          <Col
            span={svg ? 12 : 24}
            type="flex"
            height="100vh"
            minwidth="22vw"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Space>
              <Row>
                <Space direction="vertical">
                  <Row>
                    <Text
                      style={{
                        ...typeStyles,
                        fontSize: '1rem',
                        fontWeight: 'light',
                      }}
                      align=""
                    >
                      Password Update
                    </Text>
                  </Row>
                  <Row>
                    <Text
                      style={{
                        ...typeStyles,
                        fontSize: '2rem',
                        lineHeight: '1rem',
                        fontWeight: '700',
                        paddingBottom: '1rem',
                      }}
                    >
                      Enter your new password
                    </Text>
                  </Row>
                  <Form layout={'vertical'} form={form} size="large">
                    <Form.Item
                      label={
                        <label style={{ color: 'white' }}>Old Password</label>
                      }
                      labelCol={{ span: 24 }}
                      style={{ color: 'white' }}
                    >
                      <Input.Password
                        placeholder="Enter your old Password"
                        value={oldpass}
                        onChange={(e) => setOldPass(e.target.value)}
                        style={{
                          ...inputStyles,
                          background: 'rgb(0,0,0,0)',
                          color: '#fff',
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <label style={{ color: 'white' }}>New Password</label>
                      }
                      labelCol={{ span: 24 }}
                      style={{ color: 'white' }}
                    >
                      <Input.Password
                        placeholder="Enter your new Password"
                        value={newpass}
                        onChange={(e) => setNewPass(e.target.value)}
                        style={{
                          ...inputStyles,
                          background: 'rgb(0,0,0,0)',
                          color: '#fff',
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <label style={{ color: 'white' }}>
                          Confirm Password
                        </label>
                      }
                      labelCol={{ span: 24 }}
                      style={{ color: 'white' }}
                    >
                      <Input.Password
                        placeholder="Re-enter your Password"
                        value={confirmpass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        style={{
                          ...inputStyles,
                          background: 'rgb(0,0,0,0)',
                          color: '#fff',
                        }}
                      />
                    </Form.Item>
                    <Row gutter={32}>
                      <Col span={12}>
                        <Form.Item style={{ ...formItemStyles }}>
                          <Button
                            type="primary"
                            style={{ ...buttonStyles, background: '#2D3748' }}
                            onClick={() => {
                              setOldPass('')
                              setNewPass('')
                              setConfirmPass('')
                            }}
                          >
                            Clear
                          </Button>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item style={{ ...formItemStyles }}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            style={{ ...buttonStyles, background: '#35AE9A' }}
                            onClick={handleSubmit}
                          >
                            Update your password
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Space>
              </Row>
            </Space>
          </Col>
          {svg && (
            <Col
              span={12}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={image}
                style={{ transform: 'scale(0.8)' }}
                alt="Login"
              />
            </Col>
          )}
        </Row>
      </div>
    </>
  )
}

export default ChangePassword
