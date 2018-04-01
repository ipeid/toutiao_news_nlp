/**
 * 热点新闻追踪
 */

import React, { Component } from "react"

export default class Sider extends Component {

    state={
        lists:[{id:'test0'}]
    }

    render() {
        const { lists } = this.state
        return (
            <ul className="sider">
                {lists &&
                    lists.map(list => <SiderItem key={list.id} data={list} />)}
            </ul>
        )
    }
}

/**
 * Sider部分的新闻展示item
 * 图片 + 关键词标注
 */
class SiderItem extends Component {
    static defaultProps = {
        // 显示feature的最大数量
        MAXFEATURECOUNT: 3,
        data: [{}, {}, {}]
    }
    render() {
        const {
            data: {
                src = "http://www.cr173.com/up/2016-4/14616501097482450.jpg",
                alt = "图片加载中...",
                features
            },
            MAXFEATURECOUNT
        } = this.props
        return (
            <li className="sider-item">
                <img src={src} alt={alt} />
                {features &&
                    features.reduce((pref, f, i) => {
                        let _f = <span className="feature">{f}</span>
                        i < MAXFEATURECOUNT && pref.push(_f)
                        return pref
                    }, [])}
            </li>
        )
    }
}
