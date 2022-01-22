import React from "react";
import CreateSession from "./CreateSession";

export default function Session(props) {
  const {showAlert}=props
  return (
    <div>
      <CreateSession showAlert={showAlert} />
    </div>
  );
}
