import React from "react";
import { Bar } from "victory";

function SelectAssignment(props) {
  const assignmentOptions = props.data.assignments.map((assignment) => (
    <option key={assignment} value={assignment}>
      {assignment}
    </option>
  ));
  return (
    <select onChange={props.handleChange} className="assignment-dropdown">
      <option value="" selected disabled hidden>
        Choose Assignment{" "}
      </option>
      {assignmentOptions}
    </select>
  );
}

export default SelectAssignment;
