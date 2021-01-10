import React, { Component } from 'react'
import {Avatar} from 'antd'
import data from "./data"
import UseList from './useList'
export default class index extends Component {
    render() {
        console.log(data)
        let{avatar_url,create_at,loginname,score,recent_replies,recent_topics}=data.data
        return (
            <div className="wrap" >
                <Avatar src={avatar_url} className="useAvatar"/>
               <div className="useDetails">
                {loginname}<br/>
                {score}<br/>
                {create_at.split('T')[0]}</div>
                <UseList
                    title="最近创建的话题"
                    data={recent_topics}/>
                <UseList
                    title="最近参与的话题"
                    data={recent_replies}/>

            </div>
        )
    }
}
