import React from "react";
import { connect } from "react-redux";
import { loadGifById, resetCurrentGif } from "../../actions/gif";
import Loader from "../../components/Loader/index";
import "./style.scss";
class Details extends React.Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    if (!id) {
      return;
    }
    this.props.loadGifById(id);
  }

  componentWillUnmount() {
    this.props.resetCurrentGif();
  }
  goBack = () => {
    this.props.history.push("/");
  };
  handleImageLoaded = () => {
    this.setState({ loaded: true });
  };
  render() {
    const { loaded } = this.state;
    const { gif, loadingCurrentGif } = this.props;
    const { title, rating, source_tld, source, user = {} } = gif;
    const { username } = user;
    const { url } = (gif && gif.images && gif.images.downsized_medium) || "";
    const imageStyle = !loaded ? { display: "none" } : {};

    if (loadingCurrentGif) {
      return <Loader height="100vh" />;
    }
    return (
      <div className="gif-details">
        <header className="gif-details__header">
          <div className="container">
            <h2 className="text-center">
              <span>{title || "No Tittle"}</span>
              <button className="close" onClick={this.goBack}>
                Go home
              </button>
            </h2>
          </div>
        </header>
        <main className="gif-details__main container">
          {!loaded && <Loader height={`300px`} />}
          <img
            src={url}
            alt={title}
            style={imageStyle}
            className="image"
            onLoad={this.handleImageLoaded}
          />
          <div className="gif-details__description">
            <div className="group">
              <p>Username</p>
              <p>{username || "N/A"}</p>
            </div>
            <div className="group">
              <p>source</p>
              {source_tld ? <a href={source}>{source_tld}</a> : "N/A"}
            </div>
            <div className="group baseline">
              <p>Rating</p>
              <div className="badge">{rating}</div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    gif: state.gif.currentGif,
    loadingCurrentGif: state.gif.loadingCurrentGif
  };
};

export default connect(mapStateToProps, { loadGifById, resetCurrentGif })(
  Details
);
