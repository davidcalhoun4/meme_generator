import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getJoke = this.getJoke.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
    this.getJoke();
  }

  getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ topText: response.setup, bottomText: response.punchline });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleClick(event) {
    console.log(this.state.allMemeImgs);
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const newImg = this.state.allMemeImgs[random];
    this.setState({ randomImg: newImg.url });
    this.getJoke();
  }

  save() {
    const meme = {
      topText: this.state.topText,
      bottomText: this.state.bottomText,
      randomImg: this.state.randomImg,
    };
    let memes = localStorage.getItem("memes");
    if (memes) {
      memes = JSON.parse(memes);
      memes.push(meme);
    } else {
      memes = [meme];
    }
    localStorage.setItem("memes", JSON.stringify(memes));
    alert("saved");
  }

  /**
   * Create a method that, when the "Gen" button is clicked, chooses one of the
   * memes from our `allMemeImgs` array at random and makes it so that is the
   * meme image that shows up in the bottom portion of our meme generator site (`.url`)
   */

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
            style={buttonStyle}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
            style={buttonStyle}
          />
          <button onClick={this.handleClick} style={buttonStyle}>
            Gen
          </button>
          <button onClick={this.save} style={buttonStyle}>
            Save Meme
          </button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <br />
      </div>
    );
  }
}
const buttonStyle = {
  marginLeft: "10px",
  marginRight: "10px",
};
export default MemeGenerator;
