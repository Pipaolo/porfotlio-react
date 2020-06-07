import React, { Component } from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import ContactForm from "./ContactForm";
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
            </ul>
          </div>
        </div>
      </Element>
    );
  }
}
