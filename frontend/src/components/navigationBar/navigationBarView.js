import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
import Logo from "../../assets/Logo5.png";

export default class NavigationBarView extends Component {
  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <Menu color="violet" fixed="top" fluid inverted>
        <Menu.Item style={{ paddingBottom: "5px", paddingTop: "5px" }}>
          <Image src={Logo} style={{ maxWidth: "50px" }} />
        </Menu.Item>
        <Menu.Menu position="right">
          {/* <Menu.Item name="My Profile" /> */}
          <Menu.Item href="/profile">
            <FormattedMessage id="my.profile" />
          </Menu.Item>
          <Logout id="logoutButton" keycloak={keycloak} />
          <ChangeLanguage changeLanguage={changeLanguage} />
        </Menu.Menu>
      </Menu>
    );
  }
}
