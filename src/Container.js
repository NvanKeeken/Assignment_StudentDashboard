import React from "react"
import BarChard from "./chard/BarChard"
import {data} from "./data/data"
import AppRouter from "./Router/AppRouter";
import HomePage from "./Router/HomePage";
import NavBar from "./Router/NavBar";


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
     this.studentArray = this.studentArray.bind(this)
     this.setStudentState = this.setStudentState.bind(this)
    }
    
    studentArray = () =>{
        const students = data.map((item)=> item.name)
        const singleStudents = Array.from(new Set(students))
        return singleStudents
        //  singleStudents.
}
setStudentState = ()=>{
    const studentArray = this.studentArray();
    console.log(studentArray)
   return studentArray.map(student =>{
       return data.filter((obj)=>obj.name === student)   
   })
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

        const StudentObjects = this.studentArray();
        this.setState({students:data})
        
      }
     
    render(){
    return(
        <div>
            {console.log(this.setStudentState())}
        <NavBar students={this.studentArray()}/> 
        <AppRouter students={this.studentArray()} data={this.state.assignments} studentData={this.state.students}/>
        </div>
    )}

    
}


export default Container