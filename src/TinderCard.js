import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./App.css";

import axios from "axios";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://tinder-kinder.herokuapp.com/tinder/cards/",
    })
      .then((res) => {
        this.setState(() => ({
          data: res.data,
        }));
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  }

  onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  render() {
    return (
      <div className='cardContainer'>
        {this.state.data.map((character) => (
          <TinderCard
            className='swipe'
            key={character.name}
            onSwipe={(dir) => this.onSwipe(dir, character.name)}
            onCardLeftScreen={() => this.onCardLeftScreen(character.name)}>
            <div className='imgContainer'>
              <img src={character.imgUrl} />
              <h3>{character.title}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    );
  }
}
