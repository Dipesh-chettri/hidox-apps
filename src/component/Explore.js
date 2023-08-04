import React from "react";
import "../component/Explore.css";
import TestImg from "../image/footer_graph_img.jpg";
import moment from 'moment';
function Explore(props) {
  const {data}=props;
       
 const formated = (date) => {
    const formated = moment(date).format("D MMM YYYY"); 
    return formated
 }
  return (
    <div className="explore-container">
      <div className="news-section">
        <h2>Explore more on Hidoc Dr.</h2>
        <div className="news-img-container">
          <div className="image-div">
            <img src={TestImg} className="div-image" />
          </div>
   
                <div className="news-div">
                <span>News</span>
                <h6>
                  {data?.news?.title}
                </h6>
                <p>
                 {data?.news?.description}
                </p>
                <span className="post-date">Posted on {formated(data?.news?.publishedAt)}</span>
              </div>
        </div>
      </div>
      <div className="critical-container">
        <span> CRITICAL CARE .{formated(data?.article?.createdAt
)} </span>
        <h6>
         {data?.article?.articleTitle}
        </h6>
        <p>
         {data?.article?.metaDescription}</p>
      </div>
      <div className="explore-data">
        <span> CRITICAL CARE . {formated(data?.news?.updatedTime)}</span>
        <h5>
        {data?.quiz?.quizTitle}
        </h5>
        <hr className="line" />
       {data?.survey && data?.survey.map((item)=>{
        return(
          <div key={item.id}>
          <span> CRITICAL CARE.{formated(item.timestamp)}</span>
          <h5>{item.surveyName}</h5>
          </div>
        )
       })}
      </div>
    </div>
  );
}

export default Explore;
