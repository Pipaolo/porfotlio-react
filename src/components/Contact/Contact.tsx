import React, { Component } from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import ContactForm from "./ContactForm";
import {FaLinkedin} from "react-icons/fa";
interface IProps {
  id: string;
}
interface IState {}

export default class Contact extends Component<IProps, IState> {
  render() {
    return (
      <Element id={this.props.id} name="contact" className="contact">
        <div className="contact-header-wrapper">
          <div className="contact-header">Contact</div>
        </div>
        <div className="contact-form-wrapper">
          <ContactForm />
          <div className="contact-info" data-aos="fade-left">
            <ul>
              <li>
                <i className="material-icons">email</i>
                tolentinopaolomatthew23@gmail.com
              </li>
              <li>
                <i className="material-icons">phone</i>+639260385084
              </li>
              <li>
                <FaLinkedin className="icon" size="30"/>
                <a href="https://www.linkedin.com/in/paolo-matthew-tolentino-7483661a5/"> Paolo Matthew Tolentino</a>
              </li>
            </ul>
          </div>
        </div>
      </Element>
    );
  }
}
