import React from "react";
import { connect } from "react-redux";
import { loadGifs, resetGifs } from "../../actions/gif.js";
import GifList from "../../components/GifList/GifList";
import "./style.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/Loader";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      offset: 0,
      limit: 25
    };
  }
  handleChange = e => {
    const value = e.target.value;
    this.setState({ searchWord: value });
  };
  componentDidMount() {
    const { searchWord } = this.state;
    if (!searchWord.trim()) return;
    this.props.loadGifs(searchWord);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { searchWord, offset } = this.state;
    this.props.resetGifs();
    this.props.loadGifs(searchWord, offset);
  };

  fetchNextGifs = () => {
    this.setState({ offset: this.state.offset + this.state.limit + 1 }, () => {
      console.log("here");
      this.props.loadGifs(this.state.searchWord, this.state.offset);
    });
  };

  render() {
    const { gifs, loadingGifs } = this.props;
    const { searchWord } = this.state;

    // if (loadingGifs) {
    //   return <Loader message={"Fetching gifs in a jiffy"} />;
    // }
    return (
      <div className="home">
        <h1 className="text-center home__heading">Gify Gallery</h1>
        <div className="text-center home__sub-heading">
          Search for the best gifs on the internet.
        </div>
        <div className="container">
          <form className="home__input-wrapper" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type what to search"
              className="input"
              value={searchWord}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Search</button>
          </form>
        </div>

        <InfiniteScroll
          dataLength={gifs.length}
          next={this.fetchNextGifs}
          hasMore={true}
          loader={
            loadingGifs ? <Loader message={"Fetching gifs in a jiffy"} /> : null
          }
          // endMessage={<p class="text-center">~ end of catalogue ~</p>}
        >
          <GifList gifs={gifs} />
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifs: state.gif.gifs || [],
  loadingGifs: state.gif.loadingGifs
});
const mapDispatchToProps = dispatch => ({
  loadGifs: (searchWord, offset) => dispatch(loadGifs(searchWord, offset)),
  resetGifs: () => dispatch(resetGifs())
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
