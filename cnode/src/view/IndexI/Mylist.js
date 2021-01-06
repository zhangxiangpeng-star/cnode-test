import React, { Component } from 'react'
import {List,Avatar} from "antd"
import {Link} from "react-router-dom"
import data from './data'
import MyTag from "./MyTag"
export default class MyList extends Component {
    render() {
        /* console.log(data); */
        return (
            <List dataSource={data.data} 
            renderItem = {item=>(<List.Item
                actions={[item.create_at.split("T")[0]]}
                key={item.id}>
                <List.Item.Meta  
                //头像
                avatar={<Avatar src= {item.author.avatar_url} />}      // 这个不是很懂，以后注意看看      
                //题目
                title={<div><div className="count">
                    {item.reply_count}/{item.visit_count}</div> <MyTag/>  
                    <Link to={"/details/"+item.id}> { item.title } </Link> </div>}
       /*          description={<p><Link to={"/user/"+item.author.loginname}>
                    {item.author.loginname}</Link>
                    发表于：{item.create_at.split("T")[0]}
                    </p>} */

                 />  
                      
            </List.Item>)}
            >

            </List>
        )
    }
}
