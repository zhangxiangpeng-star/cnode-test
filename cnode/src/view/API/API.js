import React, { Component } from 'react'

export default class API extends Component {
    render() {
        return (
            <p>以下 api 路径均以 https://cnodejs.org/api/v1 为前缀

            主题
            get /topics 主题首页
            接收 get 参数
            
            page Number 页数
            tab String 主题分类。目前有 ask share job good
            limit Number 每一页的主题数量
            mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
            示例：/api/v1/topics
            
            get /topic/:id 主题详情
            接收 get 参数
            
            mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
            accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。
            示例：/api/v1/topic/5433d5e4e737cbe96dcef312
            
            post /topics 新建主题
            接收 post 参数
            
            accesstoken String 用户的 accessToken
            title String 标题
            tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。
            content String 主体内容
            返回值示例</p>
        )
    }
}
