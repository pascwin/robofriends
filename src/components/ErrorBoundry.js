import React, { Component } from "react";

class ErrorBoundry extends Component{
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.state({hasError: true})
    }

    render() {
            if (this.state.hasError) {
                return <h1>Upps. that ist not good!</h1>
            }
            return this.props.children;
    }
}

export default ErrorBoundry;