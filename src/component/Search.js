import React from "react";
import "../component/Search.css";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="search-container">
      <div className="paragraph">
        <p>
          Your one-stop Solution for{" "}
          <span className="blue-title"> MEDICAL LEARNING & UPDATES</span>
        </p>
      </div>
      <div className="search-body">
        <div className="search">
          <p>
            Get Knoweledge of the{" "}
            <span className="blue-title">APPROVED DRUGES</span>
          </p>
          <div>
            <div className="input-container">
              <input type="text" placeholder="Enter drug type " />
             <span className="search-icon">
              <AiOutlineSearch className="icon-search" />
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
