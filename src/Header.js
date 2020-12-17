import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import axios from "axios";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

import Modal from "@material-ui/core/Modal";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      setOpen: false,
      title: "",
      imgUrl: "",
    };
  }

  onSubmit = () => {
    if (!this.state.title && !this.state.imgUrl) {
      alert("Required");
      return;
    }
    var res = this.state.imgUrl.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    if (!res) {
      alert("Please provide valid image url!");
      return;
    }

    const data = {
      title: this.state.title,
      imgUrl: this.state.imgUrl,
    };
    axios({
      method: "post",
      url: "https://tinder-kinder.herokuapp.com/tinder/cards/",
      data: data,
    })
      .then((res) => {
        this.setState({
          setOpen: false,
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  };
  handleOpen = () => {
    this.setState({
      setOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          borderBottom: "1px solid #f9f9f9",
          background: "#ffffff",
          zIndex: 100,
        }}>
        <Modal
          open={this.state.setOpen}
          onClose={this.handleClose}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
          }}>
          <div
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              background: "#ffff",
              borderRadius: 10,
              padding: 20,
            }}>
            <FormControl required style={{ width: "100%" }}>
              <InputLabel htmlFor='my-input'>Enter your name</InputLabel>
              <Input
                name='title'
                onChange={(event) => this.handleChange(event)}
                id='my-input'
                aria-describedby='my-helper-text'
              />
              <FormHelperText id='my-helper-text'>
                We'll never share your name.
              </FormHelperText>
            </FormControl>

            <FormControl required style={{ width: "100%", marginTop: 10 }}>
              <InputLabel htmlFor='my-input'>
                Enter URL of your image
              </InputLabel>
              <Input
                name='imgUrl'
                onChange={(event) => this.handleChange(event)}
                id='my-input'
                aria-describedby='my-helper-text'
              />
              <FormHelperText id='my-helper-text'>
                We'll never share your url image.
              </FormHelperText>
            </FormControl>
            <Button
              onClick={() => this.onSubmit()}
              style={{ marginTop: 50 }}
              variant='contained'
              color='primary'>
              Submit
            </Button>
          </div>
        </Modal>

        <IconButton>
          <PersonIcon fontSize='large' />
        </IconButton>

        <IconButton onClick={this.handleOpen}>
          <AddToPhotosIcon style={{ fontSize: "50px" }} />
        </IconButton>

        <IconButton>
          <ForumIcon fontSize='large' />
        </IconButton>
      </div>
    );
  }
}
