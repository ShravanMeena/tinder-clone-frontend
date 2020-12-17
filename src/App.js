import React, { Component } from "react";
import Header from "./Header";
import TinderCard from "./TinderCard";
import SwipeButton from "./SwipeButton";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TinderCard />
        <SwipeButton />
      </div>
    );
  }
}
