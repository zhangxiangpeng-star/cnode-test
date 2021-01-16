import React, { Component } from 'react'
import { Layout } from "antd";
import yun from "../picture/digitalocean.png"
import niu from "../picture/qiniu.png"
export default class main_footer extends Component {
    render() {
        return (
            <div id='footer' >
            <Layout.Footer style={{ textAlign: 'center' }}>
                <p> RSS | 源码地址</p>
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>服务器搭建在 <img src={yun}
                    style={{
                        width: '100px',
                    }} /> ，存储赞助商为 <img src={niu}
                        style={{
                            width: '100px',
                        }} /> </p>
新手搭建 Node.js 服务器，推荐使用无需备案的
<a href= "https://www.digitalocean.com/">DigitalOcean(https://www.digitalocean.com)</a>
            </Layout.Footer>
            </div>
        )
    }
}
