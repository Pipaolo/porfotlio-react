import "./App.css";
import Landing from "../Landing/Landing";
import NavigationBar from "../NavigationBar/NavigationBar";
import About from "../About/About";
import React, { Component } from "react";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
interface IProps {}

interface IState {
  isNavbarPinned: boolean;
}

export default class App extends Component<IProps, IState> {
  componentDidMount() {
    Aos.init({
      delay: 300,
      duration: 600,
    });
  }
  render() {
    return (
      <div>
        <Landing id="landing-container" />
        <NavigationBar />
        <About id="about-container" />
        <Skills id="skills-container" />
        <Works id="works-container" />
        <Contact id="contact-container" />
        <Footer id="footer-container" />
      </div>
    );
  }
}
