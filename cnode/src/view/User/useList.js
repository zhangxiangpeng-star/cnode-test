import React, { Component } from 'react'
import { Card, List,Avatar} from "antd"
import {Link} from "react-router-dom"
export default class UseList extends Component {
    render() {
        let { title, data } = this.props;
        return (
            <Card
                title={title}
                type='inner'>
                <List
                    
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.id} >  
                            <Avatar src={item.author.avatar_url} /> 
                           <h4 > <Link to ={"/details/"+item.id} >{item.title}</Link></h4>
                           
                           <time>{item.last_reply_at.split("T")[0]}</time>
                        </List.Item>
                    )}
                >
                </List>
            </Card>
        )
    }
}
