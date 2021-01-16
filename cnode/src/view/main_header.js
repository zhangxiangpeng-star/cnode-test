//import Layout from 'antd/lib/layout/layout'
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Layout,Menu} from "antd";
import tupian from "../picture/cnodejs_light.svg"
export default class main_header extends Component {
    render(){
        return(
                <div id  = 'box'>
                    <span id = "logo"> 
                    <img src={tupian}
                        style={{
                            width:'130px',
                        }}/></span>   
                   
                    <div className = "search">
                        <form>
                        <input type="text" className = 'input' />
                        </form>
                    </div>

                    <ul id= 'nav'>
                    <li><Link to="/signin/"   >登录</Link></li>
                    <li><Link to="/resgister/"   >注册</Link></li>
                    <li><Link to="/about/"  >关于</Link></li>
                    <li><Link to="/api/"    >API</Link></li>
                    <li><Link to="/gittingstarted/"   >新手入门</Link></li>
                    <li><Link to="/index/all"  >首页</Link></li>
                    
                    
                    
                    
                  
                   
                   
                       
                    </ul>
                </div>
            )
    }
}