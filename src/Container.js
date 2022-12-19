import React from "react"
import BarChard from "./chard/BarChard"
import {data} from "./data/data"


class Container extends React.Component{
    constructor(){
        super();
      this.state = {
        assignments:[],
        students:[],
       isDifficult:true,
       isEnjoyment: true,
      }
     this.calculateAverageEnjoymentRate = this.calculateAverageEnjoymentRate.bind(this);
    }

    calculateAverageEnjoymentRate = () => {
        const assignments = data.map((item) => item.assignment); // makes array from all assignments
        const singleAssignments =Array.from(new Set(assignments)) // makes array with unique assignments
    
        // for every assignment it will return an object with assignment, average difficultyRate and enjoymentrate
         return singleAssignments.map((singleAssignment) => {
          const seperateAssignment = data.filter((obj) => obj.assignment === singleAssignment);
          
          // calculates average enjoymentrate
          const averageEnjoymentRate =
            seperateAssignment.reduce(
              (prev, current) => prev + parseInt(current.enjoymentRate),
              0
            ) / seperateAssignment.length;

            //calculates average difficultyrate
          const averageDifficultyRate =
            seperateAssignment.reduce(
              (prev, current) => prev + parseInt(current.difficultyRate),
              0
            ) / seperateAssignment.length;

        // returns object for each assignment with the average difficultyRate and EnjoymentRate
          return {
            assignment: `${seperateAssignment[0].assignment}`,
            difficultyRate: averageDifficultyRate,
            enjoymentRate: averageEnjoymentRate,
          };
        })
       
      };
      
      componentDidMount = ()=>{
        const assignmentObject = this.calculateAverageEnjoymentRate();
        this.setState({ assignments:assignmentObject})
      }
     
    render(){
    return(
        <div>
        <BarChard data={this.state.assignments}/>
        </div>
    )}

    
}


export default Container