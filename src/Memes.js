import React, { Component } from "react";

class Memes extends Component {
  constructor() {
    super();
    this.state = {
      memes: [],
    };
  }

  componentDidMount() {
    const memes = localStorage.getItem("memes");
    this.setState({ memes: JSON.parse(memes) });
  }

  render() {
    const memes = this.state.memes;
    return memes.map((meme, i) => (
      <div className="meme" key={i}>
        <img src={meme.randomImg} alt="" />
        <h2 className="top">{meme.topText}</h2>
        <h2 className="bottom">{meme.bottomText}</h2>
        <br />
      </div>
    ));
  }
}
export default Memes;
