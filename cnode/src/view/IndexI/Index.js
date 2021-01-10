import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Menu} from "antd"
import Mylist from "./Mylist"
export default class Index extends Component {
    render() {
        let tab=this.props.match.params.id;
        return (
            <div>
            <Menu mode ='horizontal' >
                <Menu.Item> <Link to="/index/all">全部</Link></Menu.Item>
                <Menu.Item> <Link to="/index/essence">精华</Link></Menu.Item>
                <Menu.Item> <Link to="/index/share">分享</Link></Menu.Item>
                <Menu.Item> <Link to="/index/ask">问答</Link></Menu.Item>
                <Menu.Item> <Link to="/index/recruit">招聘</Link></Menu.Item>
                <Menu.Item> <Link to="/index/debugging">客户端测试</Link></Menu.Item>

            </Menu>
            <div id="indexList">
             <Mylist
                tab={tab}/>
             </div>
            </div>
        )
    }
}
