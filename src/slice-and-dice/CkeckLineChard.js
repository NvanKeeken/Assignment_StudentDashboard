import React from "react"

//Bonus: slice dice option 2 change barchard into line-chard with a checkbox
function CheckLineChard (props){
    return(
        <form >
            <label>
            <input 
            type="checkbox" 
            name="isLineChard" 
            checked={props.data.isLineChard} 
            onChange={(e)=>props.onChange(e)}
            className="lineChard-checkbox"/>
           
           LineChard</label>
        </form>
    )
}

export default CheckLineChard