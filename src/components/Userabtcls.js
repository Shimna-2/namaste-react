import React from "react";
class Userabtcls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(" child constructor");
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(" child render");
    return (
      <div className="cls">
        <h1>Name:{name}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          count
        </button>
        <h2>{location}</h2>
        <h3>count:{count}</h3>
        <h4>count2:{count2}</h4>
      </div>
    );
  }
}
export default Userabtcls;
