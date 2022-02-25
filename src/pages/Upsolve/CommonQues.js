import React from 'react'
import { Popover, Button } from 'antd'
import Tags from '../../assets/Upsolve/tags-icon2.png'
import { FaFolderPlus } from 'react-icons/fa'

export default function CommonQues(props) {
  return (
    <>
      <div className="Cardcont">
        <a className="qname" href={props.url} target="_blank">
          <h7 className="Cardcont">
            {props.index}-{props.name}
          </h7>
          <span>{<FaFolderPlus />}</span>
        </a>
      </div>
      <div>
        {props.sitename !== 'atcoder' ? (
          <Popover
            content={
              <div>
                <div className="tagsbox">
                  {props.tags.substr(2, props.tags.length - 1)}
                </div>
              </div>
            }
          >
            <img className="TagImage" src={Tags}></img>
          </Popover>
        ) : (
          ' '
        )}
        <div className="status">
          <span className={`${props.className} statusIcon`}>
            {' '}
            {props.icon}{' '}
          </span>
          <h7 className={`${props.className} Cardcont`}> {props.status}</h7>
        </div>
      </div>
    </>
  )
}
