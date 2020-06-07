import React, { Component } from "react";

interface IErrors {
  name: string;
  email: string;
  message: string;
}

interface IProps {}
interface IState {
  name?: string;
  email?: string;
  message?: string;
  errors: IErrors;
  status?: string;
}
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default class ContactForm extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      errors: {
        name: "",
        email: "",
        message: "",
      },
      status: "",
    };
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length < 5 ? "Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      default:
        break;
    }

    this.setState({
      errors: errors,
      [name]: value,
    });
  };

  onChangeMessage = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    let errors = this.state.errors;
    errors.message = value.length === 0 ? "Message Cannot be Empty!" : "";

    this.setState({
      email: "",
      name: "",
      status: "",
      errors: errors,
      message: value,
    });
  };

  validateForm = () => {
    let valid: boolean = true;
    let errors = this.state.errors;
    const { name, email, message } = this.state;

    if (name === undefined) {
      errors.name = "Name cannot be empty!";
    }
    if (email === undefined) {
      errors.email = "Email cannot be empty!";
    }
    if (message === undefined) {
      errors.message = "Message cannot be empty!";
    }

    this.setState({
      errors: errors,
    });

    Object.values(errors).forEach(
      (value: string) => value.length > 0 && (valid = false)
    );

    return valid;
  };

  submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.validateForm()) {
      console.log("Valid Form!");
      const form = event.currentTarget;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }

  render() {
    const { status, errors } = this.state;

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvawajr"
        method="POST"
        className="contact-form"
        data-aos="fade-right"
      >
        <label>Name:</label>
        <input onChange={this.onChange} type="text" name="name" />
        {errors.name.length > 0 && <span className="error">{errors.name}</span>}
        <label>Email:</label>
        <input onChange={this.onChange} type="text" name="email" />{" "}
        {errors.email.length > 0 && (
          <span className="error">{errors.email}</span>
        )}
        <label>Message:</label>
        <textarea
          onChange={this.onChangeMessage}
          name="message"
          rows={5}
          className="message"
        />
        {errors.message.length > 0 && (
          <span className="error">{errors.message}</span>
        )}
        {status === "SUCCESS" ? (
          <p className="status-text">Thank you for contacting me!</p>
        ) : (
          <button>SEND</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }
}
