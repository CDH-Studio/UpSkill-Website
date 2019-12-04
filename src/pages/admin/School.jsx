import React, { Component } from "react";
import AdminMenu from "../../components/admin/AdminMenu";
import {
  Table,
  Modal,
  Header,
  Button,
  Icon,
  Input,
  Form,
  Pagination
} from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";
import { FormattedMessage, injectIntl } from "react-intl";

import config from "../../config";
const { backendAddress } = config;

const ELEMENT_PER_PAGE = 10;

class AdminSchool extends React.Component {
  goto = (link, state) => this.props.history.push(link, state);

  constructor(props) {
    super(props);
    this.state = {
      type: "school",
      column: null,
      allData: null,
      data: null,
      direction: null,
      id: null,
      modal: null,
      loading: true,
      description: null,
      state: null,
      country: null,
      activePage: 1
    };
  }

  componentDidMount() {
    console.log(this.getDisplayType(true));

    document.title = this.getDisplayType(true) + " - Admin | UpSkill";
    this.setState({ loading: true });
    axios
      .get(backendAddress + "api/admin/options/" + this.state.type)
      .then(res =>
        this.setState({
          allData: res.data,
          data: _.sortBy(res.data, ["descriptionEn"]),
          loading: false,
          column: "english",
          direction: "ascending"
        })
      );
  }

  getDisplayType = plural => {
    if (plural)
      return this.props.intl.formatMessage({
        id: "admin." + this.state.type + ".plural",
        defaultMessage: this.state.type
      });

    return this.props.intl.formatMessage({
      id: "admin." + this.state.type + ".singular",
      defaultMessage: this.state.type
    });
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    const dbAttributes = { english: "descriptionEn", french: "descriptionFr" };

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [dbAttributes[clickedColumn]]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  handleEditChange = (e, { name, value }) => this.setState({ [name]: value });

  handleFilter = (e, { value }) => {
    const newData = this.state.allData.filter(
      option =>
        (option.description &&
          option.description
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )) ||
        (option.state &&
          option.state
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )) ||
        (option.country &&
          option.country
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            ))
    );
    this.setState({
      data: _.sortBy(newData, [this.state.column]),
      activePage: 1
    });
  };

  handleClick = (type, id, description, state, country) => {
    this.setState({ id: id, modal: type, description, state, country });
  };

  handleSubmitEdit = () => {
    const { type, id, description, state, country } = this.state;

    const url = backendAddress + "api/admin/options/" + type + "/" + id;
    axios.put(url, { description, state, country }).then(() => {
      this.setState({
        id: null,
        description: null,
        state: null,
        country: null,
        modal: null
      });
      window.location.reload();
    });
  };

  handleSubmitDelete = () => {
    const { type, id } = this.state;

    const url = backendAddress + "api/admin/options/" + type + "/" + id;
    axios.delete(url).then(() => {
      this.setState({ id: null, english: null, french: null, modal: null });
      window.location.reload();
    });
  };

  handleSubmitAdd = () => {
    const { type, description, state, country } = this.state;

    const url = backendAddress + "api/admin/options/" + type;
    axios.post(url, { description, state, country }).then(() => {
      this.setState({
        id: null,
        description: null,
        state: null,
        country: null,
        modal: null
      });
      window.location.reload();
    });
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  renderEditButtons = (id, description, state, country) => {
    return (
      <center>
        <Button
          animated="fade"
          color="blue"
          onClick={() =>
            this.handleClick("edit", id, description, state, country)
          }
        >
          <Button.Content visible>
            <FormattedMessage id="admin.edit" />
          </Button.Content>
          <Button.Content hidden>
            <Icon name="edit" />
          </Button.Content>
        </Button>
        <Button
          animated="fade"
          color="red"
          inverted
          onClick={() =>
            this.handleClick("delete", id, description, state, country)
          }
        >
          <Button.Content visible>
            <FormattedMessage id="admin.delete" />
          </Button.Content>
          <Button.Content hidden>
            <Icon name="x" />
          </Button.Content>
        </Button>
      </center>
    );
  };

  editModal = () => {
    const { modal, description, state, country } = this.state;

    return (
      <Modal
        size="small"
        open={modal === "edit"}
        onClose={() => this.setState({ id: null, modal: null })}
        dimmer="blurring"
        closeIcon
      >
        <Header content={"Edit " + this.getDisplayType(false)} as="h2" />
        <Modal.Content>
          <Form onSubmit={() => alert()}>
            <Form.Field>
              <label>Name</label>
              <Input
                placeholder="Name"
                name="description"
                value={description}
                onChange={this.handleEditChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Province</label>
              <Input
                placeholder="Province"
                name="state"
                value={state}
                onChange={this.handleEditChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Country</label>
              <Input
                placeholder="Country"
                name="country"
                value={country}
                onChange={this.handleEditChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            inverted
            onClick={() => this.setState({ modal: null })}
          >
            <Icon name="remove" />
            <FormattedMessage id="admin.cancel" />
          </Button>
          <Button color="green" onClick={this.handleSubmitEdit}>
            <Icon name="checkmark" /> Apply
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  deleteModal = () => {
    const { modal, english, french } = this.state;

    return (
      <Modal
        size="small"
        open={modal === "delete"}
        onClose={() => this.setState({ id: null, modal: null })}
        dimmer="blurring"
        closeIcon
      >
        <Header content={"Delete " + this.getDisplayType(false)} as="h2" />
        <Modal.Content>
          <h5>
            Are you sure you want to delete "{english} / {french}"?
          </h5>
        </Modal.Content>

        <Modal.Actions>
          <Button
            color="green"
            floated="right"
            onClick={this.handleSubmitDelete}
            style={{ marginTop: "18px", marginBottom: "18px" }}
          >
            <Icon name="trash" /> Delete
          </Button>
          <Button
            color="red"
            inverted
            floated="right"
            onClick={() => this.setState({ modal: null })}
            style={{ marginTop: "18px", marginBottom: "18px" }}
          >
            <Icon name="remove" />
            <FormattedMessage id="admin.cancel" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  addModal = () => {
    const { modal, description, state, country } = this.state;

    return (
      <Modal
        size="small"
        open={modal === "add"}
        onClose={() => this.setState({ id: null, modal: null })}
        dimmer="blurring"
        closeIcon
      >
        <Header content={"Add " + this.getDisplayType(false)} as="h2" />
        <Modal.Content>
          <Form onSubmit={() => alert()}>
            <Form.Field>
              <label>
                <FormattedMessage id="admin.name" />
              </label>
              <Input
                placeholder="Name"
                name="description"
                value={description}
                onChange={this.handleEditChange}
              />
            </Form.Field>
            <Form.Field>
              <label>
                <FormattedMessage id="admin.province" />
              </label>
              <Input
                placeholder="Province"
                name="state"
                value={state}
                onChange={this.handleEditChange}
              />
            </Form.Field>
            <Form.Field>
              <label>
                <FormattedMessage id="admin.country" />
              </label>
              <Input
                placeholder="Country"
                name="country"
                value={country}
                onChange={this.handleEditChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            inverted
            onClick={() => this.setState({ modal: null })}
          >
            <Icon name="remove" />
            <FormattedMessage id="admin.cancel" />
          </Button>
          <Button color="green" onClick={this.handleSubmitAdd}>
            <Icon name="add" />
            <FormattedMessage id="admin.add" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  generateTable = (column, direction, pageData) => {
    return (
      <Table sortable celled fixed striped color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "description" ? direction : null}
              onClick={this.handleSort("description")}
            >
              <FormattedMessage id="admin.name" />
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "state" ? direction : null}
              onClick={this.handleSort("state")}
            >
              <FormattedMessage id="admin.state" />
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "country" ? direction : null}
              onClick={this.handleSort("country")}
            >
              <FormattedMessage id="admin.country" />
            </Table.HeaderCell>
            <Table.HeaderCell
              width={
                this.props.intl.formatMessage({ id: "lang.code" }) === "fr"
                  ? 3
                  : 4
              }
            >
              <FormattedMessage id="admin.editHeader" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(pageData, ({ id, description, state, country }) => (
            <Table.Row key={id}>
              <Table.Cell>{description}</Table.Cell>
              <Table.Cell>{state}</Table.Cell>
              <Table.Cell>{country}</Table.Cell>
              <Table.Cell>
                {this.renderEditButtons(id, description, state, country)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RENDER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  render() {
    const { type, column, data, direction, loading, activePage } = this.state;
    const { changeLanguage, keycloak } = this.props;

    let totalPages = 0;
    if (data) totalPages = Math.ceil(data.length / ELEMENT_PER_PAGE);

    const dataStart = ELEMENT_PER_PAGE * (activePage - 1);
    const dataEnd = dataStart + ELEMENT_PER_PAGE;

    const pageData = _.slice(data, dataStart, dataEnd);

    return (
      <AdminMenu
        active={type}
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        loading={loading}
        goto={this.goto}
      >
        {this.editModal()}
        {this.deleteModal()}
        {this.addModal()}

        <Header as="h1">{this.getDisplayType(true)}</Header>

        <Input onChange={this.handleFilter} label="Filter" icon="filter" />
        <Button
          color="green"
          floated="right"
          onClick={() => this.handleClick("add")}
        >
          <Icon name="add" />
          <FormattedMessage id="admin.add" />
        </Button>

        {this.generateTable(column, direction, pageData)}

        <center>
          <Pagination
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={this.handlePaginationChange}
            boundaryRange="2"
            siblingRange="2"
            firstItem={{
              content: <Icon name="angle double left" color="blue" />,
              icon: true
            }}
            lastItem={{
              content: <Icon name="angle double right" color="blue" />,
              icon: true
            }}
            prevItem={{
              content: <Icon name="angle left" color="blue" />,
              icon: true
            }}
            nextItem={{
              content: <Icon name="angle right" color="blue" />,
              icon: true
            }}
          />
        </center>
      </AdminMenu>
    );
  }
}

export default injectIntl(AdminSchool);
