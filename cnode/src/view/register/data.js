let data = [{
    title: "注册",
    content: `<div id='content'>
    <form id='signin_form' class='form-horizontal' action='/signin' method='post'>

        <div class='control-group'>
            <label class='control-label' for='name'>用户名</label>
            <div class='controls'>
                <input class='input-xlarge' id='name' name='name' size='30' type='text' />
            </div>
        </div>

        <div class='control-group'>
            <label class='control-label' for='pass'>密码</label>
            <div class='controls'>
                <input class='input-xlarge' id='pass' name='pass' size='30' type='password' />
            </div>
        </div>

        <div class='form-actions'>
            <input type='submit' class='span-primary2' value='注册' />
        </div>
    </form>
</div>`
},];

export default data;