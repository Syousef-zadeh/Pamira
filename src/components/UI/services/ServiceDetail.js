import React from "react";

const ServiceDetailCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={`${props.image}`} alt={props.alt} />
    </div>
  );
};
export default ServiceDetailCard;
