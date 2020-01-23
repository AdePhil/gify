import React from "react";
import { connect } from "react-redux";
import { loadGifs } from "../actions/gif.js";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "what!"
    };
  }
  componentDidMount() {
    const { searchWord } = this.state;
    this.props.loadGifs(searchWord);
  }

  render() {
    return <div>Home {this.props.gif.result}</div>;
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  loadGifs: searchWord => dispatch(loadGifs(searchWord))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
