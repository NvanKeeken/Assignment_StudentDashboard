import React from "react"

function CheckLineChard (props){
    return(
        <form>
            <label>
            <input 
            type="checkbox" 
            name="isLineChard" 
            checked={props.data.isLineChard} 
            onChange={(e)=>props.onChange(e)}/>
           LineChard</label>
        </form>
    )
}

export default CheckLineChard