import React, { Component } from "react";
import logo from "../../assets/1526904966253-logo.png";
import { Container, Form } from "./style";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import moment from "moment";

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(
        `repos/${this.state.repositoryInput}`
      );

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
