import react from "react"
import BarChard from "../chard/BarChard"

function HomePage (props){
    return(
     <div>
        <h2>Overview</h2>
        <p>Here is an overview of all the assignments. Each student rated the Winc Academy assignments based on how nice and on how difficult they were.</p>
         <BarChard data={props.data}/>  
     </div>
    )
}

export  default HomePage