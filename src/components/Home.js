import React from "react";
import { Link } from "react-router-dom";
import ContactsHooks from "./ContactsHooks";
import Contact from "./Contact";
import Button from "../components/modules/Button";

const ContactList = () => {
  return (
    <div>
      {/* <ContactsHooks /> */}
      <Contact />

      <div className="button-list flex flex-end">
        <Link to="/add">
          <Button data={{ action: "add", cssClass: "background-green" }} />
        </Link>
      </div>
    </div>
  );
};

export default ContactList;
