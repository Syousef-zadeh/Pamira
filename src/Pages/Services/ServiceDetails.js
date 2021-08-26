import React from "react";
import { useParams } from 'react-router-dom'

const Service = (props) => {
  const params = useParams();
  console.log(params.serviceId);

  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.alt} />
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Service;
