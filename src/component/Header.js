import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiTrophy } from "react-icons/ci";

function Header() {
  return (
    <div className="container">
      <header>
        <div className="img-container">
          <img
            src="https://www.hidoc.co/ad_campaign/pharma/sai_allergy/img/logo.png "
            height="20px"
          />
        </div>
        <div className="list-container">
          <ul>
            <li>Drugs </li>
            <li>Calculator </li>
            <li>Articles</li>
            <li>News</li>
            <li>Quizzes</li>
            <li>Surveys</li>
            <li>Webinars</li>
            <li className="li">Guidelines</li>
          </ul>
        </div>
        <div className="notification-container">
          <div>
            <AiOutlineMenu className="home-icon" />
          </div>
          <div className="notification">
            <div>
              <CiTrophy className="trophy-icon" />
            </div>
            <div>
              <span style={{ fontWeight: "700" }}>274</span>
            </div>
          </div>
          <div className="A-circle">A</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
