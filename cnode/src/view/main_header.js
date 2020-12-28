//import Layout from 'antd/lib/layout/layout'
import React, { Component } from 'react'
import {Layout} from "antd";
export default class main_header extends Component {
    render() {
        return (<Layout.Header>
            <h1 id="logo">cNode</h1>
            </Layout.Header>
        )
    }
}
