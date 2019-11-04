import React, { Component } from "react";
import EditEducationView from "./editEducationView";

export default class EditEducationController extends Component {
  render() {
    return (
      <EditEducationView
        items={this.props.profileInfo.education}
        {...this.props}
      />
    );
  }
}
