import React, { Component } from "react";

import NavigationBarView from "./navigationBarView";

export default class NavigationBarController extends Component {
  render() {
    const {
      changeLanguage,
      includeSearchForm,
      keycloak,
      redirectFunction
    } = this.props;

    return (
      <NavigationBarView
        changeLanguage={changeLanguage}
        includeSearchForm={includeSearchForm}
        keycloak={keycloak}
        redirectFunction={redirectFunction}
      />
    );
  }
}
