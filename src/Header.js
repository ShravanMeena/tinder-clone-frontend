import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import { Button } from "@material-ui/core";
import Logo from "./assets/logo.png";
export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          borderBottom: "1px solid #f9f9f9",
        }}>
        <IconButton>
          <PersonIcon fontSize='large' />
        </IconButton>

        <IconButton>
          <img
            src={Logo}
            style={{ width: "30px", height: "30px", objectFit: "contain" }}
          />
        </IconButton>

        <IconButton>
          <ForumIcon fontSize='large' />
        </IconButton>
      </div>
    );
  }
}
