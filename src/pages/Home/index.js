import React from "react";
import { connect } from "react-redux";
import { loadGifs } from "../../actions/gif.js";
import GifList from "../../components/GifList/GifList";
import "./style.scss";
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
    const { gifs } = this.props;
    return (
      <div className="home">
        <h1 className="text-center home__heading">Gify Gallery</h1>
        <div className="text-center home__sub-heading">
          Search for the best gifs on the internet.
        </div>
        <div className="home__input-wrapper">
          <input
            type="text"
            placeholder="Type what to search"
            className="input"
          />
        </div>
        <GifList gifs={gifs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifs: state.gif.gifs || []
});
const mapDispatchToProps = dispatch => ({
  loadGifs: searchWord => dispatch(loadGifs(searchWord))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
