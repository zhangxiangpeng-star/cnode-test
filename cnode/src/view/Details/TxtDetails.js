import React, { Component } from 'react'
import {Card,Avatar} from "antd";
import {Link} from "react-router-dom"
import MyTag from "../IndexI/MyTag";

export default class TxtDetails extends Component {
    render() {
        let {data}=this.props;
        const title=(<div>
            <h1>{data.title}</h1>
            <div style={{display:"flex",    //居中对齐弹性盒的各项 <div> 元素：
            alignItem:"center"}}>
                <MyTag data={data.data}/>
                <Avatar src={data.author.avatar_url}/>
                <Link to={"/user/"+data.author.logniname}>
                    {data.author.loginname}</Link>
                发表于{data.create_at.split("T")[0]}
                
            </div>
        </div>)
        return (
            <Card title={title}>
            <div  dangerouslySetInnerHTML={{
                    __html:data.content
            }}>
               
                </div>
                

            </Card>
        )
    }
}
