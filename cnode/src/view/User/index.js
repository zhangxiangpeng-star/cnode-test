import React, { Component } from 'react'
import {Avatar} from 'antd'
import {connect} from "react-redux"
import UseList from './useList'
import axios from "axios"
 class index extends Component {
    constructor(arg) {
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }
    getData(id) {
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "USER_UPDATA",
            });
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
                .then((res) => {
                    dispatch({
                        
                        type: "USER_UPDATA_SUCC",
                        data: res.data
                    });
                })
                .catch((error) => {
                    dispatch({
                        type: "USER_UPDATA_ERROR",
                        data: error
                    })
                })
        })
    }

    render() {
        let {data} = this.props;
        let{avatar_url,create_at,loginname,score,recent_replies,recent_topics}=data;
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
export default connect (state=>(state.user))(index)