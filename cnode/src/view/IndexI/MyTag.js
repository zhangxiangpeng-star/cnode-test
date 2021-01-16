import React, { Component } from 'react'
import {Tag} from "antd"
let tab={
    top:{
        color:"magenta",
        txt:"置顶"
    },
    good:{
        color:"magenta",
        txt:"精华"
    },
    share:{
        color:"magenta",
        txt:"分享"
    } ,
    ask:{
        color:"magenta",
        txt:"问答"
    },
    job:{
        color:"magenta",
        txt:"招聘"
    },
    dev:{
        color:"magenta",
        txt:"测试"
    }
}; 
function getTag(data){
    return (
        data.top ?
            "top":
        data.good ?
             "good":data.tab
    )
};
export default class MyTag extends Component {
    render() {
        //获得数据出现undefined
       /*  console.log(this.props.data) */
      
   
      /* let nowTag =tab[getTag(this.props.data)]; */
        return (
        <Tag color="magenta">标签</Tag> 
           /* <Tag color={nowTag.color}>{nowTag.txt}</Tag>  */
                
            
        )
    }
}
