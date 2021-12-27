import '../../styles/ExtraInfo/aboutUs.css'
import { Row, Col } from 'antd'
import Column from 'antd/lib/table/Column'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { MenuOutlined } from '@ant-design/icons'
import { CaretDownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import logo from '../../assets/Common/logo1.png'
import { Typography, Space } from 'antd'

function AboutUs(props) {
  const [toggleQ1, setToggleQ1] = useState(false)
  const [toggleQ2, setToggleQ2] = useState(false)
  const [toggleQ3, setToggleQ3] = useState(false)
  const [toggleQ4, setToggleQ4] = useState(false)
  const [toggleQ5, setToggleQ5] = useState(false)

  console.log(props)
  return (
    <div className="container">
      <Row>
        <Col span={24}>
          <h1 className="aboutusTitle">About us</h1>
        </Col>
      </Row>
      <Row gutter={[8, 24]} className="AboutUsContentWrapper">
        <Col sm={12} md={5} xs={24}>
          <div className="codePlatformWrapper">
            <p className="codeSites">CODECHEF</p>
            <p className="codeSites">ATCODER</p>
            <p className="codeSites">CODEFORCES</p>
          </div>
        </Col>
        <Col sm={12} md={9} xs={24} className="logoWrapper">
          <img src={logo} alt="codediggerLogo" />
        </Col>
        <Col sm={12} md={10} xs={24} className="aboutContent">
          <p
            className="contentHeadLine"
            style={{ fontSize: '1.8em', color: 'white' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            pariatur!
          </p>
          <p
            className="contentMaterial"
            style={{ fontSize: '1.5em', color: 'white' }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            voluptate laboriosam, earum sit, ipsam debitis officia veniam
            architecto iste error deleniti aliquam voluptas at sapiente tempora,
            delectus amet! Dolorum, odit.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="competeWrapper">
          <h1 className="compete">COMPETE</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div
            className="faqHeading"
            style={{
              fontSize: '2.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="faqsWrapper">
            <div
              id="qAns1"
              className="qAns"
              onClick={(e) => setToggleQ1(!toggleQ1)}
            >
              <div className="q">
                <p style={{ background: 'rgba(44, 44, 44, 1)' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam et sint illum inventore deleniti magnam maxime quae
                  unde, tenetur fugiat, ratione vero placeat est officia atque
                  earum cupiditate provident quis.
                </p>
                {toggleQ1 && (
                  <div className="answer">
                    <p className="ans">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolorum necessitatibus corrupti quod quisquam.
                    </p>
                  </div>
                )}
              </div>
              <CaretDownOutlined className="dragdown" />
            </div>
            <div
              id="qAns2"
              className="qAns"
              onClick={(e) => setToggleQ2(!toggleQ2)}
            >
              <div className="q">
                <p style={{ background: 'rgba(44, 44, 44, 1)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, itaque?
                </p>
                {toggleQ2 && (
                  <div className="answer">
                    <p className="ans">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolorum necessitatibus corrupti quod quisquam.
                    </p>
                  </div>
                )}
              </div>{' '}
              <CaretDownOutlined className="dragdown" />
            </div>
            <div
              id="qAns3"
              className="qAns"
              onClick={(e) => setToggleQ3(!toggleQ3)}
            >
              <div className="q">
                <p style={{ background: 'rgba(44, 44, 44, 1)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, itaque?
                </p>
                {toggleQ3 && (
                  <div className="answer">
                    <p className="ans">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolorum necessitatibus corrupti quod quisquam.
                    </p>
                  </div>
                )}
              </div>
              <CaretDownOutlined className="dragdown" />
            </div>
            <div
              id="qAns4"
              className="qAns"
              onClick={(e) => setToggleQ4(!toggleQ4)}
            >
              <div className="q">
                <p style={{ background: 'rgba(44, 44, 44, 1)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, itaque?
                </p>
                {toggleQ4 && (
                  <div className="answer">
                    <p className="ans">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolorum necessitatibus corrupti quod quisquam.
                    </p>
                  </div>
                )}
              </div>
              <CaretDownOutlined className="dragdown" />
            </div>
            <div
              id="qAns5"
              className="qAns"
              onClick={(e) => setToggleQ5(!toggleQ5)}
            >
              <div className="q">
                <p style={{ background: 'rgba(44, 44, 44, 1)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, itaque?
                </p>
                {toggleQ5 && (
                  <div className="answer">
                    <p className="ans">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolorum necessitatibus corrupti quod quisquam.
                    </p>
                  </div>
                )}
              </div>
              <CaretDownOutlined className="dragdown" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AboutUs
