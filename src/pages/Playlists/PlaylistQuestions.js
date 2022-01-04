import React, { useEffect, useState } from 'react'
import './PlaylistQuestions.css'
import Questions from './Questions'
import { Tag, Divider } from 'antd'
import { Button, Radio } from 'antd'

function PlaylistQuestions(props) {
  console.log(props)

  const [showTags, setShowTags] = useState(false)
  const onClick = () => setShowTags(true)

  // const Tags = () => <p className="temp_text"
  //                     style={{position: "absolute",
  //                             left: "200px",
  //                             top: "88px"}}>
  //                                 <Tag color={"magenta"}>Arrays</Tag>
  //                                 <Tag color={"lime"}>DP</Tag>
  //                                 <Tag color={"blue"}>Graph</Tag>
  //                                 <Tag color={"pink"}>LFS</Tag>
  //                                 <Tag color={"cyan"}>DFS</Tag>
  //                                 <Tag color={"orange"}>Queue</Tag>
  //                                 <Tag color={"purple"}>Stack</Tag>
  //                                 <Tag color={"red"}>Linked list</Tag>
  //                             {/* <button>DP</button> &nbsp; */}
  //                             {/* <button>Graph</button> */}
  //                             </p>;
  return (
    <div>
      <div className="topic-section">
        <img
          src="https://i.pinimg.com/736x/9a/0c/96/9a0c965fa8513084eac34d22791d67c8.jpg"
          className="page_logo"
        ></img>
        <h3 className="topic_name">TOPIC1</h3>
        <div className="topic_content">
          <p>
            In mathematics and computer science, an algorithm is defined as a
            process or set of rules to be followed in calculations or other
            problem
          </p>
        </div>
      </div>
      <div className="questions-box">
        <div>
          {Questions.Questions.map((question, i) => {
            return (
              <div className="question-map" key={i}>
                <div className="question">
                  <img
                    src="https://i.pinimg.com/736x/9a/0c/96/9a0c965fa8513084eac34d22791d67c8.jpg"
                    style={{
                      width: '50px',
                      position: 'absolute',
                      left: '30px',
                      marginTop: '12px',
                    }}
                  ></img>
                  <h3>{question.questionTitle}</h3>
                  <a href={question.url}>
                    <Button
                      type
                      shape="round"
                      size="large"
                      style={{
                        position: 'absolute',
                        right: '40px',
                        background: '#1890ff',
                      }}
                    >
                      Play
                    </Button>
                  </a>
                  <div>
                    <span>
                      <b>Platform:</b> {question.platform}
                    </span>
                    <span style={{ color: 'white' }}>-</span>
                    <span>
                      <b>Rating:</b> {question.rating}
                    </span>
                    <span style={{ color: 'white' }}>-</span>
                    <span>
                      <b>Difficulty:</b> {question.difficulty}
                    </span>
                  </div>
                  <div>
                    <div id="container">
                      {/* <button onClick={onClick}>Show Tags</button>  */}
                      {/* <Button type shape='round' size='small' onClick={onClick}> */}
                      {/* Show Tags */}
                      {/* </Button> */}
                      {showTags ? <Tags /> : null}
                    </div>
                    <div>
                      {/* <a href={experience.url}>{experience.companyName}</a> */}
                    </div>
                    {question.tags.map(function (tag, i) {
                      return (
                        <div key={i}>
                          {/* <h5>{role.title}</h5> */}
                          <Tag className="temp">{tag.tag1}</Tag>
                          <Tag className="temp">{tag.tag2}</Tag>
                          <Tag className="temp">{tag.tag3}</Tag>
                          {/* <p>{role.description}</p> */}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="companions-list">
        <div className="companions_upper">
          <div className="companion_section_img">
            {/* <img src="https://i.pinimg.com/736x/9a/0c/96/9a0c965fa8513084eac34d22791d67c8.jpg" /> */}
          </div>
        </div>
        <div className="companions_number">
          <p
            style={{
              position: 'absolute',
              left: '85px',
              fontSize: '20px',
              color: 'grey',
            }}
          >
            <b>Companions</b>
          </p>
          <p
            style={{
              position: 'absolute',
              top: '30px',
              left: '130px',
              fontSize: '30px',
            }}
          >
            <b>45</b>
          </p>
        </div>
        <div className="companions_lower">
          <div className="companion_info1">
            <img
              src="https://i.pinimg.com/736x/9a/0c/96/9a0c965fa8513084eac34d22791d67c8.jpg"
              style={{
                width: '40px',
                height: '40px',
                position: 'absolute',
                left: '10px',
                borderRadius: '20px',
              }}
            />
            <p style={{ position: 'absolute', left: '60px', top: '30px' }}>
              <b>Helly Shah</b>
            </p>
          </div>
          <div className="companion_info2">
            <img
              src="https://i.pinimg.com/736x/9a/0c/96/9a0c965fa8513084eac34d22791d67c8.jpg"
              style={{
                width: '40px',
                height: '40px',
                position: 'absolute',
                left: '10px',
                top: '22px',
                borderRadius: '20px',
              }}
            />
            <p style={{ position: 'absolute', left: '60px', top: '30px' }}>
              <b>Dave Smith</b>
            </p>
          </div>
          <div className="companion_info3">
            <img
              src="https://i.pinimg.com/736x/9a/0c/96/9a0c965fa8513084eac34d22791d67c8.jpg"
              style={{
                width: '40px',
                height: '40px',
                position: 'absolute',
                left: '10px',
                top: '22px',
                borderRadius: '20px',
              }}
            />
            <p style={{ position: 'absolute', left: '60px', top: '30px' }}>
              <b>Samantha</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistQuestions
