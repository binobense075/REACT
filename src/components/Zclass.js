import { Component } from "react";

class Zclass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child's child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child's child Component Did Mount");
  }

  render() {
    console.log(this.props.name + "Child's child render");
    return (
      <div>
        <h1>Hello child's child</h1>
      </div>
    );
  }
}

export default Zclass;
