import React from "react";

const Modal = (props) => {
  console.log(props);
  return (
    <div class="modal color-black background-black flex flex-full-center">
      <div className="modal-container background-white flex border-radius flex-column flex-full-center">
        <h3>Sure about that?</h3>
        <div className="flex color-black flex-full-center">
          <button class="padding cursor-pointer">Yes</button>
          <button class="padding cursor-pointer">No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
