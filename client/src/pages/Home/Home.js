import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Home extends Component {
  state = {
    user: [],
    username: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUsers()
      .then(res =>
        this.setState({ user: res.data, username: "", email: "", password: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUser())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.email && this.state.password) {
      API.saveUser({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadUser())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="email (required)"
            />
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="username (required)"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="password (required)"
            />
    
            <FormBtn
              disabled={!(this.state.username && this.state.email)}
              onClick={this.handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>

          {this.state.user.length ? (
            <List>
              {this.state.user.map(user => (
                <ListItem key={user._id}>
                  <Link to={"/user/" + user._id}>
                    <strong>
                      {user.email} by {user.username}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
    );
  }
}
export default Home;
