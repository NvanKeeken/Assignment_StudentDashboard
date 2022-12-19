import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import StudentPage from "./StudentPage"
import HomePage from "./HomePage"

function AppRouter(props){
    const studentRoutes =props.students.map(student => {
       return <Route path={`/${student}`} key={student} /> 
    })
    return(
        <BrowserRouter>
        <Routes>
        <Route path="" element={<HomePage data={props.data}/>}/>
            {props.students.map(student => {
       return <Route path={`/${student}`} key={student} element={<StudentPage student={student} students={props.students} studentData={props.studentData}/>} /> 
    })}
        </Routes>
        </BrowserRouter>
    )

}


export default AppRouter