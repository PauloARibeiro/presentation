import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Form from "../components/modules/Form";
import trash from "../img/trash.svg";

const EditContact = props => {
  const [contact, setContact] = useState({});
  const [redirect, setRedirect] = useState('');

  const { id } = props.match.params;

  // FETCH SINGLE CONTACT
  useEffect(() => {
    fetchContacts();
  }, []);

  // FETCH SINGLE CONTACT
  const fetchContacts = async () => {
    const res = await fetch(`http://localhost:3001/contacts/${id}`);
    const data = await res.json();

    setContact(data);
  };

  const deleteUser = async () => {
    const { id } = contact;

    fetch(`http://localhost:3001/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...contact })
    })
      .then(res => res.json())
      .then(response => setRedirect('true'))
      .catch(error => console.error("oops"));
  };

  // CHECKS IF ROUTE CAN REDIRECT
  if (redirect) return <Redirect to="/" />;

  return (
    <div>
      <div className="contact-edit flex flex-column flex-full-center margin color-black">
        <img src={contact.image} alt="" />
        <h2 className="">{contact.name}</h2>
      </div>
      <Form action="edit" data={contact} />

      <div
        className="flex flex-end delete-contact color-black"
        onClick={() => deleteUser()}
      >
        <img src={trash} className="icon " alt="delete contact" />
        <span>Delete {contact.name}</span>
      </div>
    </div>
  );
};

export default EditContact;
