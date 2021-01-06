import React, { Component } from 'react'
import data from"./data"
import {Card} from "antd"
export default class GittingStartded extends Component {
    render() {
        return (<div className="wrap">
            {data.map((item,index)=>(<Card
                title={item.title}
                type="inner"
                key={index}>
                    <div dangerouslySetInnerHTML={{
                        __html:item.content
                    }}>
                        
                    </div>
                </Card>))}
        </div>
               
        )
    }
}
