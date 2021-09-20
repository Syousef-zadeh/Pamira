import React from "react";

const ServiceDetailCard = (props) => {
  return (
    <div>
      <h2>{props.serviceName}</h2>
      <img src={props.serviceImage} alt={props.alt} />
    </div>
  );
};
export default ServiceDetailCard;
