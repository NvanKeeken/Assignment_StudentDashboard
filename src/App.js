import "./App.css";
import { useState } from "react";
import { data } from "./data/data";

import BarChard from "./chard/BarChard";

function App() {

   const [assignment, setAssignment] = useState([])

 

  

  const calculateAverageEnjoymentRate = () => {
    const assignments = data.map((item) => item.assignment); // makes array from all assignments
    const singleAssignments =Array.from(new Set(assignments)) // makes array with unique assignments

    // for every assignment it will return an object with assignment, average difficultyRate and enjoymentrate
     return singleAssignments.map((singleAssignment) => {
      const seperateAssignment = data.filter((obj) => obj.assignment === singleAssignment);
      
      const averageEnjoymentRate =
        seperateAssignment.reduce(
          (prev, current) => prev + parseInt(current.enjoymentRate),
          0
        ) / seperateAssignment.length;
      const averageDifficultyRate =
        seperateAssignment.reduce(
          (prev, current) => prev + parseInt(current.difficultyRate),
          0
        ) / seperateAssignment.length;
      return {
        assignment: `${seperateAssignment[0].assignment}`,
        difficultyRate: averageDifficultyRate,
        enjoymentRate: averageEnjoymentRate,
      };
    })
   
  };

console.log(calculateAverageEnjoymentRate())

  return (
    <div className="App">
      <BarChard data={calculateAverageEnjoymentRate()}/>
    </div>
  );
}

export default App;
