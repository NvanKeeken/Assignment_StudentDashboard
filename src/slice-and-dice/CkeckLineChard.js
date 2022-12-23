import React from "react"

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