import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      location: "",
      avatar_url: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sudamfegade");
    const json = await data.json();
    this.setState({
      userName: json.name,
      location: json.location,
      avatar_url: json.avatar_url,
    });
    console.log(json);
  }
  render() {
    const { userName, location, avatar_url } = this.state;
    return (
      <>
        <h1>Name: {userName}</h1>
        <h3>Location: {location}</h3>
        <img src={avatar_url}></img>
      </>
    );
  }
}

export default UserClass;
