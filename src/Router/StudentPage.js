import react from "react"
import BarChard from "../chard/BarChard"

function StudentPage (props){
    const studentChardData =props.studentData.filter(object => object.name === props.student)
    return(
     <div>
        
         <BarChard data={studentChardData}/> 
     </div>
    )
}

export  default StudentPage