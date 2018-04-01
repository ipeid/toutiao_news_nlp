// 入口文件
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import Index from "./components/index"

const App = props => {
    return (
        <BrowserRouter basename="/">
            <Route path="/" component={Index} />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))