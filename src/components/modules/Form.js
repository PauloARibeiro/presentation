import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "./Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
      image: "",
      redirect: false
    };

    // this.checkAction();
    // BIND FUNCTIONS TO CLASS
    // this.formSubmit = this.formSubmit.bind(this);
    // this.setErrorMessage = this.setErrorMessage.bind(this);
    // this.setErrorInput = this.setErrorInput.bind(this);
    // this.updateFields = this.updateFields.bind(this);
  }

  // CHECKS IF THE COMPONENT DID UPDATE
  // THIS IS PRINTING USER INFO IN THE INPUTS
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.data !== this.props.data) {
      const { email, name, phone, image } = this.props.data;
      this.setState({
        name,
        email,
        phone,
        image
      });
    }
  }

  // SUBMIT FORM
  formSubmit(event) {
    event.preventDefault();
    const { action } = this.props;
    const { name, email, phone } = this.state;

    if (name === "" && email === "" && phone === "")
      return this.setAllInputsError();
    if (name === "")
      return this.setErrorMessage("nameError", "Please enter your name");
    if (email === "")
      return this.setErrorMessage("emailError", "Your email is important");
    if (phone === "")
      return this.setErrorMessage("phoneError", "You don't have a phone?");

    // IF ALL INPUTS ARE NOT EMPTY THEN STORE DATA IN OBJ
    const random = Math.floor(Math.random() * Math.floor(4));
    const data = {
      name,
      email,
      phone,
      image: `/img/person-0${random}.svg`
    };

    action === "add" ? this.addContact(data) : this.editContact(data);
  }

  // ADD CONTACT
  addContact(data) {
    fetch("http://localhost:3001/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    })
      .then(res => res.json())
      .then(response => this.setState({ redirect: true }))
      .catch(error => console.error("oops"));
  }

  // EDIT CONTACT
  editContact(data) {
    data.image = this.props.data.image;

    const { id } = this.props.data;
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    })
      .then(res => res.json())
      .then(response => this.setState({ redirect: true }))
      .catch(error => console.error("oops"));
  }

  // UPDATE INPUT FIELDS
  updateFields(event, value, valueError) {
    this.setState({
      [value]: event.target.value,
      [valueError]: ""
    });
  }

  // SET ERROR MESSAGE
  setErrorMessage(value, message) {
    this.setState({
      [value]: message
    });
  }

  // SET ERROR CLASS FOR INPUT
  setErrorInput(value) {
    if (value !== "") return "active";
    return "";
  }

  // SET ALL INPUT ERRORS ACTIVE
  setAllInputsError() {
    this.setErrorMessage(
      "nameError",
      "woah there buddy you need to fill this out"
    );
    this.setErrorMessage(
      "emailError",
      "woah there buddy you need to fill this out"
    );
    this.setErrorMessage(
      "phoneError",
      "woah there buddy you need to fill this out"
    );
  }

  render() {
    // STATE VARIABLES
    const {
      name,
      email,
      phone,
      nameError,
      emailError,
      phoneError,
      redirect
    } = this.state;
    // PROP VARIALBES
    const { action } = this.props;

    // CHECKS IF ROUTE CAN REDIRECT
    if (redirect) return <Redirect to="/" />;

    return (
        <form className="form" onSubmit={event => this.formSubmit(event)}>
          {/* NAME */}
          <div className={`form-input ${this.setErrorInput(nameError)}`}>
            {/* INPUT */}
            <input
              type="text"
              className="form-input border-radius border-grey-light color-black box-shadow"
              placeholder="Name"
              name="Name"
              value={name}
              onChange={event => this.updateFields(event, "name", "nameError")}
            />

            {/* ERROR MESSAGE */}
            <label htmlFor="name" className="color-red">
              {nameError}
            </label>
          </div>

          {/* EMAIL */}
          <div className={`form-input ${this.setErrorInput(emailError)}`}>
            {/* INPUT */}
            <input
              type="text"
              className="form-input border-radius border-grey-light color-black box-shadow"
              placeholder="Email"
              name="Email"
              value={email}
              onChange={event =>
                this.updateFields(event, "email", "emailError")
              }
            />

            {/* ERROR MESSAGE */}
            <label htmlFor="name" className="color-red">
              {emailError}
            </label>
          </div>

          {/* PHONE */}
          <div className={`form-input ${this.setErrorInput(phoneError)}`}>
            {/* INPUT */}
            <input
              type="text"
              className="form-input border-radius border-grey-light color-black box-shadow"
              placeholder="Phone"
              name="Phone"
              value={phone}
              onChange={event =>
                this.updateFields(event, "phone", "phoneError")
              }
            />

            {/* ERROR MESSAGE */}
            <label htmlFor="name" className="color-red">
              {phoneError}
            </label>
          </div>

          {/* BUTTON */}
          <div className="button-list flex flex-end">
            <Button data={{ action: action }} />
          </div>
        </form>
    );
  }
}

export default Form;
