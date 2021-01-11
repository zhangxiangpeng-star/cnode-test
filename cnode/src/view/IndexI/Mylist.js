import React, { Component } from 'react'
import {List,Avatar} from "antd"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import axios from"axios"
 import MyTag from "./MyTag" 
const tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};
 class MyList extends Component {
     constructor(arg){
         super(arg)
         this.state={
             page:1
             
         };
         this.getData(this.props.tab);
     }
    shouldComponentUpdate(nextProps,nexState){
         if(this.props.tab!== nextProps.tab){
            this.getData(nextProps.tab)
            return false;
         }
         return true;
     }


    getData(tab){
        this.props.dispatch((dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
                .then((res)=>{
                    dispatch({
                        type:"LIST_UPDATA_SUCC",
                        data:res.data
                    });
                })
                .catch((error)=>{
                    dispatch({
                        type:"LIST_UPDATA_ERROR",
                        data:error,
                })
        })
    })}
    render() {
        let {data}=this.props;
        console.log(this.props);
        return (
            <List dataSource={data} 
            renderItem = {item=>(<List.Item
                actions={[item.create_at.split("T")[0]]}
                key={item.id}>
                <List.Item.Meta  
                //头像
                avatar={<Avatar src= {item.author.avatar_url} />}      // 这个不是很懂，以后注意看看      
                //题目
                title={<div><div className="count">
                    {item.reply_count}/{item.visit_count}</div> {<MyTag/>}  
                    <Link to={"/details/"+item.id}> { item.title } </Link>
                    </div>}
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
export default connect(state=>state.list)(MyList);