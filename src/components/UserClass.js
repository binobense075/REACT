import React from "react";
import Zclass from "./Zclass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.name + "Child constsructor");

    this.state = {
      profile: {
        name: "Default Name",
        location: "Default Location",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/mojombo");
    const json = await data.json();
    console.log(json);
    this.setState({
      profile: {
        name: json.name,
        location: json.location,
      },
    });

    // this.timer = setInterval(() => {
    //   console.log("Interval");
    // }, 1000);
  }

  componentDidUpdate() {
    // console.log("Child componenet did update is called");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    // console.log(this.props.name + "Child Render");
    const { name, location } = this.state.profile;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h4>{location}</h4>
        <h4>Profile</h4>
        {/* <Zclass name={this.props.name} /> */}
      </div>
    );
  }
}

export default UserClass;
