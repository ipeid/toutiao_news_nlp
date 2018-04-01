import React from 'react'

import Sider from './sider/sider'
import Header from './header/header'


const Root = ({props})=>{
    return (
        <div className="app">
            {props.children}
        </div>
    )
}


class Index extends React.Component{
    render(){
        return (
            <Root>
                <Header></Header>
                <Container>
                    <Sider></Sider>
                    <Content></Content>
                </Container>
                {/* <Footer></Footer> */}
            </Root>
        )
    }
}