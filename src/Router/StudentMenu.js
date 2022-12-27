import React from "react";

function StudentMenu (props){
    // for each student it return a list element in navigation menu with a link to the route defined in AppRouter
    const listItem = props.students.map((student) => {
         return (
            <li key={student}>
              <a href={`http://localhost:3000/${student}`}>{student}</a>
             </li>
           );
         });
    return(
         <div className="students-menu"
        onMouseLeave={(e) => 
          document
           .getElementsByClassName("students-menu__list")[0]
           .style.visibility = "hidden"}>
             
          <ul className="students-menu__list">{listItem}</ul> 
     </div> 
    )
}


export default StudentMenu