import React, { Component } from "react";
import { withRouter } from "react-router";
class ScrollToBottom extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log(prevProps.location);
      console.log(this.props.location);
      window.scrollTo(0, 1000);
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToBottom);
