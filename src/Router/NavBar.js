import react from "react"


function NavBar (props){
   const listItem= props.students.map(student => {
      return  <li key={student}><a href={`http://localhost:3000/${student}`}>{student}</a></li>
    })
    return(
     <div>
       <ul>
        <li><a href="http://localhost:3000">Home</a></li>
        {listItem}
       </ul>
     </div>
    )
}

export  default NavBar