import { Component } from "react";
import axios from "axios";

import config from "../../../../config";
const { backendAddress } = config;

export default class FieldManagingComponent extends Component {
  constructor(props) {
    super(props);

    this.fields = {};
    this.handleApply = this.handleApply.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleApply() {
    let url = backendAddress + "api/profile/" + localStorage.getItem("userId");
    axios
      .put(url, this.fields)
      .then(function(response) {
        console.log("should this be called?", response);
      })
      .catch(function(error) {
        console.error(error);
      });
    this.fields = {};
  }

  updateField(e, o) {
    const { checked, name, value } = o;
    let newVal;
    if (checked !== undefined) {
      newVal = checked;
    } else {
      newVal = value;
    }
    this.fields[name] = newVal;
  }
}
