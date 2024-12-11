import Userabtcls from "./Userabtcls";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log(" parent constructor");
  }
  componentDidMount() {
    console.log("parent mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>we are the best delivery food providers all over the worldddddd</h1>
        <h2>stay swiggy stay happy</h2>

        <Userabtcls name={"shimna cn"} location={"ooty"}></Userabtcls>
      </div>
    );
  }
}
export default About;
