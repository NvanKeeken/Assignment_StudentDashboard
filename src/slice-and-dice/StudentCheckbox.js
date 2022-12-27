import React from "react";

function StudentCheckbox (props){
    return(
        props.data.students.map((student)=>
        <label><input type="checkbox" checked={false} name="isStudent" value={student} onChange={props.onChange}/> {student}</label>)
    )
}


export default StudentCheckbox
