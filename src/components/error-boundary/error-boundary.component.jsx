import React, { Component } from "react";

import "./error-boundary.style.scss";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <section className="error-container">
          <span className="error-heading">Uppss!!</span>
          <img
            className="error-image"
            src="https://i.imgur.com/A040Lxr.png"
            alt=""
          />
          <span className="error-message">Something went wrong in our end</span>
        </section>
      );
    }
    return this.props.children;
  }
}
