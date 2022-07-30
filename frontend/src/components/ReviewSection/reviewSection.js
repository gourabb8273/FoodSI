import React from "react";

import './reviewSection.css';
import getCurrentDateTime from "../../services/getCurrentDateTime";
/**
 * @author
 * @function ReviewSection
 **/

function ReviewSection({ reviews }) {
    debugger;
    const date = getCurrentDateTime();
  return (
    <div>
      {reviews && reviews.length
        ? reviews.map((review) => {
            return <div className="reviewSection">
                <div className="reviewHeader">
                    <h6 className="reviewRating">{review.overallRating}</h6>
                    <h6 className="reviewTitle">{review.title}</h6>
                </div>
                <div className="reviewBody">
                <p>{review.description}</p>
                <h6>By <strong>{review.author}</strong></h6>
                <h5>{date}</h5>
                </div>
            </div>
          })
        : null}
    </div>
  );    
}

export default ReviewSection;
