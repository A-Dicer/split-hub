import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Dash extends Component {
  state = {
    currentUser: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  
  loadUsers = () => {
    API.getUsers()
      .then(res => {
        if(res.data.statusCode === 401){
          this.props.history.push("/login");
        }
        else {
          console.log("user:", res.data.sess.passport.user.username);
          this.setState({currentUser: res.data.sess.passport.user.username})
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav userInfo={this.state.currentUser } />
      </div>
    );
  }
}

export default Dash;
