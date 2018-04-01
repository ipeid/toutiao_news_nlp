/**
 * 头部 
 * 1. 显示LOGO
 * 2. 搜索框
 * 3. 提示信息
 * 4. 用户信息
 */

import React,{Component,PureComponent} from 'react'

class Header extends Component{

    render(){
        return (
            <div className="header">
                <div className="logo">NLP by zhoushen</div>
                <Search></Search>
                <UserInfo></UserInfo>
            </div>
        )
    }
}

/**
 * 搜索框
 */
class Search extends PureComponent{
    render(){
        return (
            <div className="search"></div>
        )
    }
}

/**
 * 用户信息
 */
class UserInfo extends PureComponent{
    render(){
        return (
            <div className="user-info">
                <div className="msg"></div>
            </div>
        )
    }
}