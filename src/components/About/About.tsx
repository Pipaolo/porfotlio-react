import React, { Component } from "react";
import "./About.css";
import { Element } from "react-scroll";
interface IProps {
  id: string;
}

interface IState {}

export default class About extends Component<IProps, IState> {
  render() {
    return (
      <Element id={this.props.id} className="about my-auto" name="about">
        <div className="image-wrapper">
          <img src={require("../../picture.jpg")} alt="" />
        </div>
        <h4>
          I am a full-stack mobile app, that aims to provide high-quality, fast,
          and responsive applications.
        </h4>
      </Element>
    );
  }
}
