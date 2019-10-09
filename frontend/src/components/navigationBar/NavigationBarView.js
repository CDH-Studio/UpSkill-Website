import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
import logo5 from "../../assets/Logo5.png";

export default class NavigationBarView extends Component {
  render() {
    return (
      <Menu color="violet" fixed="top" inverted size="huge" fluid>
        <Menu.Item style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <Image src={logo5} style={{ maxWidth: "50px" }} />
        </Menu.Item>
        <Menu.Menu position="right">
          {/* <Menu.Item name="My Profile" /> */}
          <Menu.Item>
            <FormattedMessage id="my.profile" />
          </Menu.Item>
          <Logout id="logoutButton" keycloak={this.props.keycloak} />
          <ChangeLanguage changeLanguage={this.props.changeLanguage} />
        </Menu.Menu>
      </Menu>
    );
  }
}
