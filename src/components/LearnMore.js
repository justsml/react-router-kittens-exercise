import React from "react";

export default function LearnMore() {
  return (
    <div className="learnmore page-view">
      <h1>Learn More</h1>

      <img
        src="http://adorbs-as-a-service.herokuapp.com/api/v1/400w/400h/"
        alt="Varying Kitten pictures"
      />
      <small className="credit">
        <a
          href="https://github.com/justsml/adorbs-as-a-service"
          rel="noopener noreferrer"
          target="_blank"
        >
          Adorbs-as-a-Service
        </a>
      </small>
    </div>
  );
}
