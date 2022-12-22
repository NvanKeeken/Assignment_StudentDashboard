import React from "react"

function SortingForm (props){
    return(

             <form onChange={(e)=>props.sortRating(e, e.target.placeholder)}>
               <label> Sort by Difficulty</label>
               <label> <input type="radio" name="sortChard" value="highToLow" placeholder="difficultyRate"/> High to Low</label>
               <label> <input type="radio" name="sortChard" value="lowToHigh" placeholder="difficultyRate"/> Low to High</label>
               <br/>
               
               <label>Sort by Enjoyment</label>
               <label> <input type="radio" name="sortChard" value="highToLow" placeholder="enjoymentRate"/> High to Low</label>
               <label> <input type="radio" name="sortChard" value="lowToHigh" placeholder="enjoymentRate"/> Low to High</label>
               <br/>
          
            </form>
        
    )
}

export default SortingForm