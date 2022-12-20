import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import StudentPage from "./StudentPage"
import HomePage from "./HomePage"

function AppRouter(props){
   
    return(
        <BrowserRouter>
        <Routes>
        <Route path="" element={<HomePage data={props.data} onChange ={props.onChange}/>}/>

      {props.students.map(student => {
       return <Route 
       path={`/${student}`} 
       key={student} 
       element={<StudentPage student={student} 
       data = {props.data}
       students={props.students} 
       studentData={props.studentData}
       onChange={props.onChange}/>} /> 
    })}
        </Routes>
        </BrowserRouter>
    )

}


export default AppRouter