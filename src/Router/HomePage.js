import react from "react"
import BarChard from "../chard/BarChard"
import Checkbox from "../slice-and-dice/Checkbox"
import LineChard from "../chard/LineChard"
import CheckLineChard from "../slice-and-dice/CkeckLineChard"
import SortingForm from "../sort/SortingForm"

import Footer from "./Footer"


function HomePage (props){
    return(
     <div>
       
        <CheckLineChard data={props.data} onChange={props.onChange}/>
       
        <h2>Average per assignment</h2>
        <SortingForm chardData={props.chardData} onClick={props.sortRating} sortRating={props.sortRating}/>
        <Checkbox data={props.data} onChange={props.onChange}/>
         {props.data.isLineChard ? 
          <LineChard data={props.data} chardData={props.data.assignments}/> 
          :
         <BarChard data={props.data} chardData={props.data.assignments}/> 
         }

        
         <Footer/>
     </div>
    )
}

export  default HomePage