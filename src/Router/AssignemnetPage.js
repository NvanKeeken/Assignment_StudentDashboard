import React from "react";
import AssignmentChard from "../chard/AssignmentChard";
import SelectAssignment from "../slice-and-dice/SelectAssignment";
import Checkbox from "../slice-and-dice/Checkbox";

function AssignmentPage(props) {
  return (
    <div>
      <SelectAssignment data={props.data} handleChange={props.handleChange} />
      <h2>Rating per assignment</h2>
      <Checkbox data={props.data} onChange={props.onChange} />
      
      {/* When no selection has been made, there will be no chard */}
      {props.data.chosenAssignment.length === 0 ? (
        <div className="empty-div"></div>
      ) : (
        <AssignmentChard
          xAs={"name"}
          chardData={props.data.chosenAssignment}
          data={props.data}
        />
      )}
    </div>
  );
}

export default AssignmentPage;
