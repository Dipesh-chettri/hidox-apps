import React from "react";
import "../component/Button.css";

function Button() {
  return (
    <div className="btn-container">
      <div className="btn-paragraph-div">
        <p>
          Dollymed Drug Database :The Dollymed database contains 143072 labeling
          submitted to the Food and Drug Administration (FDA) by companies.
          DailyMed does not contain a complete listing of labeling for
          FDA-regulated products (e.g, labeling that is not submitted to the
          FDA).
        </p>
      </div>
      <div className="btn-group">
        <button className="btn">Anesthesia</button>
        <button className="btn">Cardiology</button>
        <button className="btn">Critical Care</button>
        <br />
        <button className="btn">Densistry</button>
        <button className="btn">Dermatology</button>
        <button className="btn">Diabetology</button>
      </div>
    </div>
  );
}

export default Button;
