import React from "react"

import Sider from "./sider/sider"
import Header from "./header/header"
import Content from "./content/content"

const Root = ({ children }) => {
    return <div className="app">{children}</div>
}

const Container = ({ children }) => {
    return <div className="container">{children}</div>
}

export default class Index extends React.Component {
    render() {
        return (
            <Root>
                <Header />
                <Container>
                    <Sider />
                    <Content />
                </Container>
                {/* <Footer></Footer> */}
            </Root>
        )
    }
}
