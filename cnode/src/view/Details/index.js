import React, { Component } from 'react'
import TxtDetails from "./TxtDetails"
import data from "./data"
import TxtReply from "./TxtReply"
export default class index extends Component {
    render() {
        
        return (<div className="wrap">
            <TxtDetails data={data.data}  />
            <TxtReply
                replies={data.data.replies}
                replyCount={data.data.reply_count}

            />
        </div>
          
        )
    }
}
 
