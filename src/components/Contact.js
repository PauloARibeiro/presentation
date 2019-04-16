import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrow from "../img/arrow.svg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  async fetchContacts() {
    const res = await fetch("http://localhost:3001/contacts");
    const data = await res.json();

    this.setState({ contacts: data });
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className="contact-list">
        {contacts.map(contact => {
          const { name, phone, image, id } = contact;
          return (
            <Link to={`/edit/${id}`} key={id}>
              <div
                className="contact-card flex flex-full-center padding cursor-pointer flex-space-between hover border-radius background-grey-lightest box-shadow"
                key={id}
              >
                <img
                  src={image}
                  alt="contact img"
                  className="border-radius contact-card-user-img"
                />

                <div className="flex flex-column color-black">
                  <h3 className="font-bold remove-margin">{name}</h3>
                  <p className="remove-margin font-normal">{phone}</p>
                </div>

                <img
                  src={arrow}
                  alt="go to contact"
                  className="icon border-radius"
                />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Contact;
