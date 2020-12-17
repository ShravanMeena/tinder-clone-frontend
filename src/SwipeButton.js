import React, { Component } from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import Close from "@material-ui/icons/Close";
import StarRate from "@material-ui/icons/StarRate";
import Favourite from "@material-ui/icons/Favorite";
import FlashOn from "@material-ui/icons/FlashOn";

import IconButton from "@material-ui/core/IconButton";

export default class SwipeButton extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderBottom: "1px solid #f9f9f9",
        }}>
        <IconButton
          style={{
            boxShadow: "0px 10px 53px 0px rgba(0,0,0,0.8)",
            background: "#fff",
            color: "#f5b748",
          }}>
          <ReplayIcon fontSize='large' />
        </IconButton>

        <IconButton
          style={{
            boxShadow: "0px 10px 53px 0px rgba(0,0,0,0.8)",
            background: "#fff",
            color: "#ec5e6f",
          }}>
          <Close fontSize='large' />
        </IconButton>

        <IconButton
          style={{
            boxShadow: "0px 10px 53px 0px rgba(0,0,0,0.8)",
            background: "#fff",
            color: "#62b4f9",
          }}>
          <StarRate fontSize='large' />
        </IconButton>

        <IconButton
          style={{
            boxShadow: "0px 10px 53px 0px rgba(0,0,0,0.8)",
            background: "#fff",
            color: "#76e2b3",
          }}>
          <Favourite fontSize='large' />
        </IconButton>

        <IconButton
          style={{
            boxShadow: "0px 10px 53px 0px rgba(0,0,0,0.8)",
            background: "#fff",
            color: "#915dd1",
          }}>
          <FlashOn fontSize='large' />
        </IconButton>
      </div>
    );
  }
}
