import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
    // console.log("Parent Construtor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  componentDidUpdate() {
    // console.log("Parent component did update");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About us</h1>
        <h4>This is a about us page</h4>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold">User: {loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <User name="Bino From (Fucntional Component)" location="Chennai" />

        {/* <UserClass name="First" location="Banglore" /> */}
        {/* <UserClass name="Second" location="Banglore" /> */}
        {/* <UserClass name="Third" location="Banglore" /> */}
      </div>
    );
  }
}

export default About;
