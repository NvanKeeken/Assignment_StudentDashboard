import react from "react"
import BarChard from "../chard/BarChard"
import Checkbox from "../slice-and-dice/Checkbox"
import LineChard from "../chard/LineChard"
import CheckLineChard from "../slice-and-dice/CkeckLineChard"

function HomePage (props){
    return(
     <div>
        <h2>Overview</h2>
        <p>Here is an overview of all the assignments. Each student rated the Winc Academy assignments based on how nice and on how difficult they were.</p>
        <CheckLineChard data={props.data} onChange={props.onChange}/>
         
         {props.data.isLineChard ? 
          <LineChard data={props.data} chardData={props.data.assignments}/> 
          :
         <BarChard data={props.data} chardData={props.data.assignments}/> 
         }

         <Checkbox data={props.data} onChange={props.onChange}/>
     </div>
    )
}

export  default HomePage