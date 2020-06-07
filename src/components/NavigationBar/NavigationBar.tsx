import "./NavigationBar.css";
import React, { Component, SyntheticEvent } from "react";

import { Navbar, NavbarBrand, Nav, NavLink } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { isMobile } from "react-device-detect";

import { scroller } from "react-scroll";

interface IProps {}

interface IState {
  isOpened: boolean;
  isPinned: boolean;
  currentPage: string;
}
export default class NavigationBar extends Component<IProps, IState> {
  private pages = ["Home", "About", "Skills", "Works", "Contact"];

  state: IState = {
    isOpened: false,
    isPinned: false,
    currentPage: "",
  };

  onTogglePressed = () => {
    const { isOpened } = this.state;
    this.setState({
      isOpened: isOpened ? false : true,
    });
  };

  onNavigationPressed = (page: string) => {
    if (page === "home") {
      scroller.scrollTo("landing-container", {
        smooth: true,
        delay: 100,
        duration: 300,
      });
    } else {
      scroller.scrollTo(`${page}-container`, {
        duration: 1000,
        delay: 100,
        smooth: true,
      });
    }
    this.setState({
      isOpened: false,
    });
  };

  componentDidMount() {
    //Handle Scrolling
    window.addEventListener("scroll", () => {
      let windowOffset = window.pageYOffset + 56;
      // Get the landing page height to determine whether
      // to pin the nav bar or not.
      const landingPage = document.getElementById("landing-container");
      const aboutPageOffset =
        document.getElementById("about-container")?.offsetTop ?? 0;
      const skillsPageOffset =
        document.getElementById("skills-container")?.offsetTop ?? 0;
      const worksPageOffset =
        document.getElementById("works-container")?.offsetTop ?? 0;
      const contactPageOffset =
        document.getElementById("contact-container")?.offsetTop ?? 0;

      if (!isMobile) {
        this.setState({
          isPinned: windowOffset > landingPage!.clientHeight + 150,
          isOpened: false,
        });
      }

      if (windowOffset > aboutPageOffset) {
        this.highlightNav("about");
      }
      if (windowOffset > skillsPageOffset) {
        this.highlightNav("skills");
      }
      if (windowOffset > worksPageOffset) {
        this.highlightNav("works");
      }
      if (windowOffset > contactPageOffset) {
        this.highlightNav("contact");
      }
      if (windowOffset === 56) {
        this.highlightNav("home");
      }
      this.setState({
        isOpened: false,
      });
    });
  }

  highlightNav = (page: string) => {
    const { currentPage } = this.state;
    if (currentPage !== page) {
      this.setState({
        currentPage: page,
      });
    }
  };

  render() {
    const { isPinned } = this.state;

    return (
      <div>
        <Navbar
          className={`nav-bar ${
            isPinned || isMobile
              ? "fixed animate__animated animate__slideInDown"
              : ""
          }`}
          expand="lg"
          onSelect={(eventKey: string, e: SyntheticEvent<unknown>) => {
            this.onNavigationPressed(eventKey);
          }}
          variant="dark"
          expanded={this.state.isOpened}
        >
          <NavbarBrand className="logo">PaoTolentino</NavbarBrand>
          <NavbarToggle onClick={this.onTogglePressed} />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav>
              {this.pages.map((page: string) => (
                <NavLink
                  key={page}
                  eventKey={page.toLowerCase()}
                  active={page.toLowerCase() === this.state.currentPage}
                >
                  {page}
                </NavLink>
              ))}
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  }
}
