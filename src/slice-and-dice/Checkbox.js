import React from "react"

function Checkbox (props){
    return(
        <form className="checkbox-container">
            <label className="checkbox">
            <input 
            type="checkbox" 
            name="isDifficult" 
            checked={props.data.isDifficult} 
            onChange={(e)=>props.onChange(e)}
            className="check-difficulty"/>
            Difficulty</label>

            <label className="checkbox">
            <input 
            type="checkbox" 
            name="isEnjoyment" 
            checked={props.data.isEnjoyment} 
            onChange={(e)=>props.onChange(e)}
            className="check-enjoyment"/>
            Enjoyment</label>
        </form>
    )
}

export default Checkbox