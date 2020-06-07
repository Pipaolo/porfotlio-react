import React, { Component } from "react";
import "./Landing.css";
import { scroller } from "react-scroll";

interface IProps {
  id: string;
}

interface IState {}

export default class Landing extends Component<IProps, IState> {
  convertTextToArr = (text: any) => {
    let arr = [];
    for (var i in text) {
      arr.push(text[i]);
    }
    return arr;
  };

  render() {
    let description: string = "HELLO.";
    return (
      <div id={this.props.id} className="hero-bg">
        <div className="hero-overlay">
          <div className="hero-wrapper">
            <div id="wavetext" className="hero-title">
              {this.convertTextToArr(description).map((text) =>
                text === " " ? <span>&nbsp;</span> : <span>{text}</span>
              )}
            </div>

            <p>I build high-quality mobile applications.</p>
            <button
              onClick={() => {
                scroller.scrollTo("about-container", {
                  duration: 1000,
                  delay: 100,
                  smooth: true,
                });
              }}
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}
