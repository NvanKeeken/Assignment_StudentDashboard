import React from "react";
import data from "./data/data.json";
import AppRouter from "./Router/AppRouter";
import NavBar from "./Router/NavBar";
import ProfileData from "./data/mockData.json";

// This is the container component that holds state
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      assignments: [],
      students: [],
      averages: [],
      profiles: [],
      isDifficult: true,
      isEnjoyment: true,
      isLineChard: false,
      isStudent: [],
    };
    this.calculateAverage = this.calculateAverage.bind(this);
    this.studentArray = this.studentArray.bind(this);
    this.assignmentArray = this.assignmentArray.bind(this);
    this.setStudentState = this.setStudentState.bind(this);
    this.getRandomProfile = this.getRandomProfile.bind(this);
    this.handeleStudentChange = this.handeleStudentChange.bind(this)
  }

  // Gets random profile from the mockdata from mockaroo in mockData.js that gets used in Studenpage
  getRandomProfile = (names) => {
    const person = names[Math.floor(Math.random() * names.length)];
    return person;
  };

  // Makes a new Array from all the unique names in state data
  studentArray = () => {
    const students = this.state.data.map((item) => item.name);
    const singleStudents = Array.from(new Set(students));
    return singleStudents;
  };

  // Makes a new Array from all the unique assignments in state data
  assignmentArray = () => {
    const assignments = this.state.data.map((item) => item.assignment);
    const singleAssignments = Array.from(new Set(assignments));

    return singleAssignments;
  };

  // Makes a new array with only the objest in state data that belong to one student
  setStudentState = () => {
    const studentArray = this.studentArray();
    return studentArray.map((student) => {
      return data.filter((obj) => obj.name === student);
    });
  };

  // Calculates the average difficulty rating and enjoyment rating per assignments
  calculateAverage = () => {
    const assignments = this.state.data.map((item) => item.assignment); // makes array from all assignments
    const singleAssignments = Array.from(new Set(assignments)); // makes array with unique assignments

    // for every assignment it will return an object with assignment, average difficultyRate and enjoymentrate
    return singleAssignments.map((singleAssignment) => {
      const seperateAssignment = [...this.state.data].filter(
        (obj) => obj.assignment === singleAssignment
      );

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
    });
  };

  // This lifecycle component sets state.assignments to an array with unique assignments, students to a array with unique students, averages to an
  // array from objects (containing assignment, average difficultyRate and average EnjoymenRate) and profiles to random objects from mockData.json
  componentDidMount = () => {
    const assignmentObject = this.calculateAverage();
    const studentsArray = this.studentArray();
    this.setState({ assignments: this.assignmentArray() });
    this.setState({ averages: assignmentObject });
    this.setState({ students: studentsArray });
    this.setState({ profiles: this.getRandomProfile(ProfileData) });

  };

  // This function gets called when checkbox is checked and unchecked and sets state to checked property
  handleChange = (event) => {
    console.log(event.target.checked)
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  
  handeleStudentChange=(event)=>{
  const isChecked = event.target.checked
  const {name, checked} =event.target
  console.log(checked)
  }
  //This function is called when the average difficulty rating or enjoyment ratig is sorted low to high or high to low
  sortRating = (e, prop) => {
    // checks if the difficulty of enjoyment rating needs to be sorted from low to high
    const ratingAscending = [...this.state.averages].sort((a, b) =>
      prop === "difficultyRate"
        ? a.difficultyRate - b.difficultyRate
        : a.enjoymentRate - b.enjoymentRate
    );

    // checks if the difficulty of enjoyment rating needs to be sorted from high to low
    const ratingDescending = [...this.state.averages].sort((a, b) =>
      prop === "difficultyRate"
        ? b.difficultyRate - a.difficultyRate
        : b.enjoymentRate - a.enjoymentRate
    );

    // Checks based on value radiobutton if state needs to be sorted ascending or descending
    e.target.value === "lowToHigh"
      ? this.setState({ averages: ratingAscending })
      : this.setState({ averages: ratingDescending });
  };

  render() {
    return (
      <div>
        <NavBar students={this.studentArray(this.state.students)} />
        <AppRouter
          students={this.studentArray()}
          data={this.state}
          onChange={this.handleChange}
          sortRating={this.sortRating}
          handleDropMenu={this.dropMenu}
          studentChange={this.handeleStudentChange}
        />
      </div>
    );
  }
}

export default Container;
