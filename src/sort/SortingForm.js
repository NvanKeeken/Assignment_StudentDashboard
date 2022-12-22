import React from "react"

function SortingForm (props){
    return(

             <form className="sort-form" onChange={(e)=>props.sortRating(e, e.target.placeholder)}>
              <div className="sort-difficult">
               <label className="sort-label"> Sort by Difficulty</label>
               <label> <input type="radio" name="sortChard" value="highToLow" placeholder="difficultyRate"/> High to Low</label>
               <label> <input type="radio" name="sortChard" value="lowToHigh" placeholder="difficultyRate"/> Low to High</label>
               <br/>
               </div>

               <div className="sort-enjoyment">
               <label className="sort-label">Sort by Enjoyment</label>
               <label> <input type="radio" name="sortChard" value="highToLow" placeholder="enjoymentRate"/> High to Low</label>
               <label> <input type="radio" name="sortChard" value="lowToHigh" placeholder="enjoymentRate"/> Low to High</label>
               <br/>
               </div>
          
            </form>
        
    )
}

export default SortingForm