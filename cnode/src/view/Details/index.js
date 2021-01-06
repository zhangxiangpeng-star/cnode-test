 import React, { Component } from 'react'
import {Card,Avatar} from "antd";
import {Link} from "react-router-dom"
import MyTag from "../IndexI/MyTag";
import data from "./data"
export default class index extends Component {
    render() {
        const title=(<div>
            <h1>{data.data.title}</h1>
            <div style={{display:"flex",    //居中对齐弹性盒的各项 <div> 元素：
            alignItem:"center"}}>
                <MyTag data={data.data}/>
                <Avatar src={data.data.author.avatar_url}/>
                <Link to={"/user/"+data.data.author.logniname}>
                    {data.data.author.loginname}</Link>
                发表于{data.data.create_at.split("T")[0]}
                
            </div>
        </div>)
        return (<div className="wrap">
            <Card title={title}>
            <div  dangerouslySetInnerHTML={{
                    __html:data.data.content
            }}>
               
                </div>
                

            </Card>
        </div>
          
        )
    }
}
 
