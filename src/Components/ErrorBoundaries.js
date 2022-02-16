import React from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        console.log({
            error, 
            errorInfo
        });
    }
  
    render() {
        if (this.state.hasError) {
            return(
                <div> 
                    <h1>Oops ! Something went wrong.</h1>
                </div>
            );
        }
  
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any
};