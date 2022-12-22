import React from "react"
import BarChard from "./chard/BarChard"
import {data} from "./data/data"
import AppRouter from "./Router/AppRouter";
import HomePage from "./Router/HomePage";
import NavBar from "./Router/NavBar";
import ProfileData from "./data/mockData";




class Container extends React.Component{
    constructor(){
        super();
      this.state = {
        assignments:[],
        students:[],
        profiles:[],
       isDifficult:true,
       isEnjoyment: true,
       isLineChard: false,
      }
     this.calculateAverageEnjoymentRate = this.calculateAverageEnjoymentRate.bind(this);
     this.studentArray = this.studentArray.bind(this)
     this.assignmentArray = this.assignmentArray.bind(this)
     this.setStudentState = this.setStudentState.bind(this)
     this.dropMenu = this.dropMenu.bind(this)
     
    }
    
    studentArray = () =>{
        const students = data.map((item)=> item.name)
        const singleStudents = Array.from(new Set(students))
        return singleStudents
        //  singleStudents.
}

assignmentArray = () =>{
    const assignments = data.map((item)=> item.assignment)
    const singleAssignments = Array.from(new Set(assignments))
    
    return singleAssignments
}
setStudentState = ()=>{
    const studentArray = this.studentArray();
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
         this.setState({students:data})
         this.setState({profiles: ProfileData })
        
    
        
      }
      

      handleChange = (event)=>{
       const {name,checked} = event.target;
       this.setState({
        [name]: checked
       })
      }
     
      sortRating = (e, prop) => {
         const ratingAscending = [...this.state.assignments].sort((a,b)=> prop === "difficultyRate"?
         a.difficultyRate -b.difficultyRate: a.enjoymentRate - b.enjoymentRate)
  
        const ratingDescending = [...this.state.assignments].sort(
          (a, b) => prop === "difficultyRate" ? b.difficultyRate - a.difficultyRate : b.enjoymentRate - a.enjoymentRate
        )

        e.target.value === "lowToHigh"
          ? this.setState({ assignments: ratingAscending })
          : this.setState({ assignments: ratingDescending });
      };
      
      dropMenu = (e)=>{
        console.log("hello")
         return "hello"
     }

    
    render(){
    return(
        <div>
        <NavBar students={this.studentArray()}/> 
        <AppRouter 
        students={this.studentArray()} 
        assignments={this.assignmentArray()} 
        data={this.state}  
        studentData={this.state.students} 
        onChange={this.handleChange} 
        sortRating={this.sortRating}
        handleDropMenu={this.dropMenu}/>
        </div>
    )}

    
}


export default Container