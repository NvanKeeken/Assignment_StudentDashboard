import react from "react"
import BarChard from "../chard/BarChard"
import Checkbox from "../slice-and-dice/Checkbox"

function StudentPage (props){
   
   
    const studentChardData =props.studentData.filter(object => object.name === props.student)
    return(
     
     <div>
         
        <div>
                 <img src={props.data.profiles.photo}></img>
                 <p>name: {props.student} {props.data.profiles.last_name}</p> 
                 <p>e-mail: {props.data.profiles.email}</p>
                 <p>phone-number: {props.data.profiles.phone}</p>
        </div>
         <BarChard chardData={studentChardData} data={props.data}/> 
         <Checkbox data={props.data} onChange={props.onChange}/>
     </div>
    )
}

export  default StudentPage