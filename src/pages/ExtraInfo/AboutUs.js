import { Row } from 'antd';
import Column from 'antd/lib/table/Column';
import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {MenuOutlined} from '@ant-design/icons';
import {CaretDownOutlined} from '@ant-design/icons';
import {useState} from 'react';
import logo from '../../assets/Common/logo1.png'

var qAnsStyle = {
    q: {
        width: '90%',
        height: 'fit-content',
        backgroundColor: 'rgba(44, 44, 44, 1)',
        color: 'white',
        padding: '5px 15px',
        borderRadius: '5px',
        display: 'flex', 
        alignItems: 'center',
        border: '3px solid rgb(31,30,30)',
        boxShadow: '2px 2px 2px rgb(31,30,18)'
    },
    dragdown: {
        position: 'absolute', right: '100px'
    },
}


function AboutUs(props) {
    const [toggleQ1, setToggleQ1] = useState(false);
    const [toggleQ2, setToggleQ2] = useState(false);
    const [toggleQ3, setToggleQ3] = useState(false);
    const [toggleQ4, setToggleQ4] = useState(false);
    const [toggleQ5, setToggleQ5] = useState(false);
    
    console.log(props);
    return (
        <div style= {{backgroundColor: 'black', color: 'white', padding: '15px 20px' }}>
            <navbar className="nav" style={{width: '100vw', height: '35px', color: 'white', backgroundColor: 'black'}}>
                <ul style={{color: 'white', display:'flex', gap: '15px'}}>
                    <li style={{listStyle: 'none', marginRight: '850px', fontSize: '27px' }}>CodeDigger</li>
                    <SearchOutlined style={{marginTop: '5px' }}/>
                    <li style={{listStyle: 'none', marginTop: '1px'}}>Welcome user</li>
                    <li style={{listStyle: 'none'}}>Menu  <MenuOutlined style={{marginTop: '5px'}} /></li>
                    
                </ul>            
                </navbar>
            <div className="heading" style={{ marginTop: '70px', marginLeft: '70px', fontSize: '32px'}}>ABOUT US</div>
            <hr style={{border: '2px solid #1b1b1b', width: '50px', position: 'absolute', left: '90px'}}/>
            <div className="contentWrapper" style={{display: 'flex', marginTop: '50px'}}>
                <div className="leftText" style={{transform: 'rotate(-90deg)', marginTop: '90px', marginLeft: '-20px', display: 'flex', gap: '15px', fontSize: '13px'}}> <p>CODESHEF</p> <p>CODEFORCES</p> <p>ATCODER</p></div>
                <div className="logo" style={{width: '230px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={logo} alt="logo" style={{width: '250px', height: '250px', marginTop: '0px', marginLeft: '-130px'}} />
                </div>
                <div className="content" style={{ width: '800px' }}>
                    <p className="contentHeadLine" style={{ fontSize: '25px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur!</p>
                    <p className="contentMaterial" style={{ fontSize: '20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptate laboriosam, earum sit, ipsam debitis officia veniam architecto iste error deleniti aliquam voluptas at sapiente tempora, delectus amet! Dolorum, odit.</p>
                </div>
            </div>
            <div className="strokeLetterCompete" style={{margin: '-30px 40px 35px 800px'}}>
                <h1 style={{letterSpacing: '2px', fontSize: '7rem', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px', color: 'rgba(44, 44, 44, 1)'}}>COMPETE</h1>
            </div>
            <div className="faqHeading" style={{marginLeft: '70px', fontSize: '28px'}}>FREQUENTLY ASKED QUESTIONS</div>
            <hr style={{border: '2px solid #1b1b1b', width: '100px', position: 'absolute',  left: '90px'}}/>

            <div className="faqsWrapper" style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>

                <div id="qAns1" className="qAns" style={qAnsStyle.q} onClick={(e)=>setToggleQ1(!toggleQ1)}>
                    <div className="q1" style={{background: 'none', border:'none', outline: 'none', color: 'white', fontSize: 'inherit'}} >
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, itaque?</p>
                        {toggleQ1 && (
                        <div className="answer">
                            <p style={{color: 'grey'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus corrupti quod quisquam.</p>
                        </div> 
                        )}
                    </div><CaretDownOutlined style={qAnsStyle.dragdown} />
                </div>
                <div id="qAns2" className="qAns" style={qAnsStyle.q} onClick={(e)=>setToggleQ2(!toggleQ2)}>
                    <div className="q2" style={{background: 'none', border:'none', outline: 'none', color: 'white', fontSize: 'inherit'}}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, itaque?</p>
                        {toggleQ2 && (
                        <div className="answer">
                            <p style={{color: 'grey'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus corrupti quod quisquam.</p>
                        </div> 
                        )}
                    </div> <CaretDownOutlined style={qAnsStyle.dragdown} />
                </div>
                <div id="qAns3" className="qAns" style={qAnsStyle.q} onClick={(e)=>setToggleQ3(!toggleQ3)}>
                    <div className="q3" style={{background: 'none', border:'none', outline: 'none', color: 'white', fontSize: 'inherit'}}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, itaque?</p>
                        {toggleQ3 && (
                        <div className="answer">
                            <p style={{color: 'grey'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus corrupti quod quisquam.</p>
                        </div> 
                        )} 
                    </div><CaretDownOutlined style={qAnsStyle.dragdown} />
                </div>
                <div id="qAns4" className="qAns" style={qAnsStyle.q} onClick={(e)=>setToggleQ4(!toggleQ4)}>
                    <div className="q4" style={{background: 'none', border:'none', outline: 'none', color: 'white', fontSize: 'inherit'}}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, itaque?</p>
                        {toggleQ4 && (
                        <div className="answer">
                            <p style={{color: 'grey'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus corrupti quod quisquam.</p>
                        </div> 
                        )}
                    </div> <CaretDownOutlined style={qAnsStyle.dragdown} />
                </div>
                <div id="qAns5" className="qAns" style={qAnsStyle.q} onClick={(e)=>setToggleQ5(!toggleQ5)}>
                    <div className="q5" style={{background: 'none', border:'none', outline: 'none', color: 'white', fontSize: 'inherit'}}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, itaque?</p>
                        {toggleQ5 && (
                        <div className="answer">
                            <p style={{color: 'grey'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus corrupti quod quisquam.</p>
                        </div> 
                        )} 
                    </div><CaretDownOutlined style={qAnsStyle.dragdown} />
                </div>
                
            </div>
        </div>
    )
}

export default AboutUs
