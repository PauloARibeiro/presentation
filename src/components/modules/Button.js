import React from "react";
import add from "../../img/add.svg";
import edit from "../../img/edit.svg";

const Button = ({ data }) => {
  const { action } = data;
  const actionImage = checkActionImage(action);
  const actionColor = checkActionColor(action);

  return (
    <button
      className={`button cursor-pointer font-bold flex flex-full-center hover circle ${actionColor}`}
    >
      <img src={actionImage} alt="action button" className="icon" />
    </button>
  );
};

// THIS WILL CHECK THE BUTTON ACTION (ADD, DELETE OR EDIT CONTACT)
const checkActionImage = action => {
  return action === 'add' ? add : edit
};

// CHANGE BACKGROUND COLOR
const checkActionColor = action => {
  return action === 'add' ? 'background-green' : 'background-yellow';
};

export default Button;
