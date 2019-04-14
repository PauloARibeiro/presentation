import React from "react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import Button from "../components/modules/Button";

const ContactList = () => {
  return (
    <div>
      <Contacts />

      <div className="button-list flex flex-end">
        <Link to="/add">
          <Button data={{ action: "add", cssClass: "background-green" }} />
        </Link>
      </div>
    </div>
  );
};

export default ContactList;
