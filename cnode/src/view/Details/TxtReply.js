import React, { Component } from 'react'
import {Card,Avatar,List} from "antd";
import {Link} from "react-router-dom"
export default class TxtReply extends Component {
    render() {
        let {loading,replyCount,replies} =this.props;
       /*  console.log(replies[0]) */
        return <Card 
                loading={loading}
                title={replyCount+"回复"}
                type="inner"
            >
                    <List
                        itemLayout="vertical"
                        dataSource={replies}
                        className="replyList"
                        renderItem={(item) => (
                            <List.Item
                                key={item.id}
                                extra={item.ups.length>0?<span>{item.ups.length}点赞</span>:""}
                                >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.avatar_url}/>} 
                                    description={<p><Link to ={"/user/"+item.author.loginname} 
                                    >{item.author.loginname}</Link><span>发表于：{item.create_at.split("T")[0]}</span></p>}
                                    />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html:item.content
                                        }}>
                                    </div>
                            </List.Item>
                        )}
                    >
                    </List>
                        
            </Card>
        
    }
}
