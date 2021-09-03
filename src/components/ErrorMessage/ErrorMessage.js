import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "Info", children }) => {
  return (
    <Alert variant={variant} style={{ fontDize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};
export default ErrorMessage;
