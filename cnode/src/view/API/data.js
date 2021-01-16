let data = [{
    title: "get /topics 主题首页",
    content: `<p>接收 get 参数</p>
<ul>
<li>page Number 页数</li>
<li>tab String 主题分类。目前有 ask share job good</li>
<li>limit Number 每一页的主题数量</li>
<li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li><ul>
<p>示例：<a href="https://cnodejs.org/api/v1/topics" target="_blank">/api/v1/topics</a></p>`
},{
    title:'get /topic/:id 主题详情',
    content: `<p>接收 get 参数</p>
    <ul>
    <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
    <li>accesstoken <code>String</code> 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 <code>is_collect</code> 以及 <code>replies</code> 列表中的 <code>is_uped</code> 值。</li>
    </ul>
    <p>示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>`
},{
    title: "post /topics 新建主题",
    content: `<p>接收 post 参数</p>
    <ul>
    <li>accesstoken <code>String</code> 用户的 accessToken</li>
    <li>title <code>String</code> 标题</li>
    <li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code> <code>dev</code>。开发新客户端的同学，请务必将你们的测试帖发在 <code>dev</code> 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
    <li>content <code>String</code> 主体内容</li>
    </ul>
    <p>返回值示例</p>
    <pre class="prettyprint language-js">
    <code>{success: true, topic_id: &#x27;5433d5e4e737cbe96dcef312&#x27;}</code></pre>`
},{
    title: "post /topics/update 编辑主题",
    content: `<p>接收 post 参数</p>
    <ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
<li>topic_id <code>String</code> 主题id</li>
<li>title <code>String</code> 标题</li>
<li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code></li>
<li>content <code>String</code> 主体内容</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{success: true, topic_id: &#x27;5433d5e4e737cbe96dcef312&#x27;}
</code></pre>`
},{
    title: "post /topic_collect/collect 收藏主题",
content: `<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
<li>topic_id <code>String</code> 主题的id</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{&quot;success&quot;: true}
</code></pre>`
},{
    title: "post /topic_collect/de_collect 取消主题",
content: `<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
<li>topic_id <code>String</code> 主题的id</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{success: true}
</code></pre>`
},{
    title: "get /post /topic/:topic_id/replies 新建评论",
content: `<p>接收 post 参数</p><ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
<li>content <code>String</code> 评论的主体</li>
<li>reply_id <code>String</code> 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{success: true, reply_id: &#x27;5433d5e4e737cbe96dcef312&#x27;}
</code></pre>`
},  {
    title: "post /reply/:reply_id/ups 为评论点赞",
content: `<p>接受 post 参数</p><ul>
<li>accesstoken <code>String</code></li>
</ul>
<p>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 <code>action</code> 字段中，<code>up</code> or <code>down</code>。</p>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{&quot;success&quot;: true, &quot;action&quot;: &quot;down&quot;}
</code></pre>`
},{
    title: "get /user/:loginname 用户详情",
content: `<p>示例：<a href="/api/v1/user/alsotang">/api/v1/user/alsotang</a></p>
<h4>post /accesstoken 验证 accessToken 的正确性</h4>
<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
</ul>
<p>如果成功匹配上用户，返回成功信息。否则 403。</p>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}
</code></pre>`
},  {
    title: "get /message/count 获取未读消息数",
content: `<p>接收 get 参数</p><ul>
<li>accesstoken <code>String</code></li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{ data: 3 }
</code></pre>`
},  {
    title: "get /messages 获取已读和未读消息",
content: `<p>接收 get 参数</p>
<ul>
<li>accesstoken <code>String</code></li>
<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{
  data: {
    has_read_messages: [],
    hasnot_read_messages: [
      {
        id: &quot;543fb7abae523bbc80412b26&quot;,
        type: &quot;at&quot;,
        has_read: false,
        author: {
          loginname: &quot;alsotang&quot;,
          avatar_url: &quot;https:&#x2F;&#x2F;avatars.githubusercontent.com&#x2F;u&#x2F;1147375?v=2&quot;
        },
        topic: {
          id: &quot;542d6ecb9ecb3db94b2b3d0f&quot;,
          title: &quot;adfadfadfasdf&quot;,
          last_reply_at: &quot;2014-10-18T07:47:22.563Z&quot;
        },
        reply: {
          id: &quot;543fb7abae523bbc80412b24&quot;,
          content: &quot;[@alsotang](&#x2F;user&#x2F;alsotang) 哈哈&quot;,
          ups: [ ],
          create_at: &quot;2014-10-16T12:18:51.566Z&quot;
          }
        },
    ...
    ]
  }
}
</code></pre>`
},  {
    title: "post /message/mark_all 标记全部已读",
content: `<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code></li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{ success: true,
  marked_msgs: [ { id: &#x27;544ce385aeaeb5931556c6f9&#x27; } ] }
</code></pre><h4>post /message/mark_one/:msg_id 标记单个消息为已读</h4>
<p>请求示例：<a href="/message/mark_one/58ec7d39da8344a81eee0c14">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code></li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code>{
  success: true,
  marked_msg_id: &quot;58ec7d39da8344a81eee0c14&quot;
}
</code></pre>`
},  {
    title: "知识点",
content: `<ol>
<li>如何获取 accessToken？
用户登录后，在设置页面可以看到自己的 accessToken。
建议各移动端应用使用手机扫码的形式登录，验证使用 <code>/accesstoken</code> 接口，登录后长期保存 accessToken。</li>
</ol>`
},

];

export default data;