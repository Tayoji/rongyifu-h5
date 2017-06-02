/**
 * Created by Tayiji on 2017/6/2.
 */

let inputs = [{icon:"../../src/reg_user.png",pl:"请输入用户名/手机号"},
    {icon:"../../src/reg_pwd.png",pl:"请输入密码"},
    {icon:"../../src/reg_code.png",pl:"短信验证码"}
    ];
var Input = React.createClass({
    getInitialState: function () {
        return {};
    },
    getDefaultProps: function () {
        return {
            pl: "你想说点什么",
            icon: "",
            value: ""
        };
    }
    ,
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className="input_main">
                <img src={this.props.icon}/>

            </div>);
    }
});
