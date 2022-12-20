import React from "react"

function Checkbox (props){
    return(
        <form>
            <label>
            <input 
            type="checkbox" 
            name="isDifficult" 
            checked={props.data.isDifficult} 
            onChange={(e)=>props.onChange(e)}/>
            Difficulty Rating</label>

            <label>
            <input 
            type="checkbox" 
            name="isEnjoyment" 
            checked={props.data.isEnjoyment} 
            onChange={(e)=>props.onChange(e)}/>
            Enjoyment Rating</label>
        </form>
    )
}

export default Checkbox