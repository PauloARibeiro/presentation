import React from "react";
import search from "../../img/search.svg";

const Search = () => (
  <div className="contact-search">
    <input
      type="text"
      placeholder="Search contact..."
      className="contact-search-input border-radius border-grey-light color-black box-shadow"
    />
    <img src={search} alt="search" class="contact-search-icon" />
  </div>
);

export default Search;
