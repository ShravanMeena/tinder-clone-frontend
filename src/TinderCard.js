import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./App.css";

import { shuffle } from "lodash";

import axios from "axios";
import Test from "./assets/logo.png";
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
          data: shuffle(res.data),
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
        {this.state.data.map((item) => (
          <TinderCard
            className='swipe'
            key={item.name}
            onSwipe={(dir) => this.onSwipe(dir, item.name)}
            onCardLeftScreen={() => this.onCardLeftScreen(item.name)}>
            <div className='imgContainer'>
              <img
                src={
                  item.imgUrl.match(
                    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
                  )
                    ? item.imgUrl
                    : Test
                }
              />

              <h3>{item.title}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    );
  }
}
