import React from "react";
import Notes from "./Notes";

export default function PatientNotes(props) {
  const {showAlert}=props
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
}
