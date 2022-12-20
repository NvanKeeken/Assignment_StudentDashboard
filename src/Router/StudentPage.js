import react from "react"
import BarChard from "../chard/BarChard"
import Checkbox from "../slice-and-dice/Checkbox"

function StudentPage (props){
    const studentChardData =props.studentData.filter(object => object.name === props.student)
    return(
     <div>
         <BarChard chardData={studentChardData} data={props.data}/> 
         <Checkbox data={props.data} onChange={props.onChange}/>
     </div>
    )
}

export  default StudentPage