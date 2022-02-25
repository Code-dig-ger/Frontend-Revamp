import React from 'react'
import { Switch } from 'antd'
import { BsFillBarChartFill, BsFillInfoCircleFill } from 'react-icons/bs'
import { FiRefreshCw } from 'react-icons/fi'
import {
  FaExclamationCircle,
  FaRegPauseCircle,
  FaCheckCircle,
  FaArrowAltCircleUp,
  FaSignal,
} from 'react-icons/fa'
import { Checkbox } from 'antd'

export default function Toggle(props) {
  return (
    <>
      <div className="Sitename">
        <div className="upsolveIcon" style={{ color: 'aqua' }}>
          <BsFillBarChartFill />
        </div>

        <div className="upsolveInfo">
          <h1 className="heading">Upsolve</h1>
          <p className="upsolveAbout">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni a
            eligendi repellendus est odit, illo cum aliquam quasi, sit non iste
            fuga, vitae eum rerum exercitationem. Laborum quasi impedit quas.
          </p>
        </div>
        <div className="upsolveFilter">
          <div className="filterHeading">
            <h4>Status</h4>
            <span
              onClick={(e) => {
                props.setUpdate(props.update + 1)
              }}
              className="upsolveRefresh"
            >
              <FiRefreshCw />
            </span>
          </div>

          <div className="filterCheckbox">
            <Checkbox
              onChange={() => {
                props.setnotAttemptedToggle(!props.notAttemptedToggle)
              }}
            >
              {' '}
              <span className="filterNotAttempted">
                <FaArrowAltCircleUp />
              </span>{' '}
              /
              <span className="filterWrong">
                <FaExclamationCircle />
              </span>{' '}
            </Checkbox>
          </div>
          <div
            className={props.siteName !== 'codechef' ? 'Toggle' : 'noDisplay'}
          >
            <Checkbox
              onChange={(val) => {
                props.setPracticeToggle(!props.PracticeToggle)
                props.setvirtualPracticeToggle(!props.virtualPracticeToggle)
                props.setnextPage(1)
              }}
            >
              {' '}
              Virtual Only{' '}
              <span>
                <BsFillInfoCircleFill />
              </span>
            </Checkbox>
          </div>
          <div className="logoImg">im</div>
        </div>

        {/* <divd>
          <h3>{props.siteName}</h3>
          <img
            style={{
              width: props.imgWidth,
              height: props.imgHeight,
              background: 'white',
            }}
            src={props.logo}
          />
        </divd>

        <div className="Right-Side">
          <div
            className={props.siteName !== 'codechef' ? 'Toggle' : 'noDisplay'}
          >
            <h6>Include Practice </h6>
            <div>
              <Switch
                defaultUnChecked
                onChange={(val) => {
                  props.setPracticeToggle(!props.PracticeToggle)
                  props.setvirtualPracticeToggle(!props.virtualPracticeToggle)
                  props.setnextPage(1)
                }}
              />
            </div>
          </div>
          <div>
            <h6>Only Wrong/Not Attempted</h6>
            <div>
              <Switch
                defaultUnChecked
                onChange={() => {
                  props.setnotAttemptedToggle(!props.notAttemptedToggle)
                }}
              />
            </div>
          </div>
          <div>
            <button
              className="btnUpdate"
              title="solved? update"
              onClick={(e) => {
                props.setUpdate(props.update + 1)
              }}
            >
              <img className="refreshImg" src={props.refresh}></img>
            </button>
          </div>
        </div> */}
      </div>
    </>
  )
}
