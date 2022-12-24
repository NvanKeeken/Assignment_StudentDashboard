import React from "react";
import data from "./data/data.json";
import AppRouter from "./Router/AppRouter";
import NavBar from "./Router/NavBar";
import ProfileData from "./data/mockData.json";


class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      assignments: [],
      students: [],
      averages:[],
      profiles: [],
      isDifficult: true,
      isEnjoyment: true,
      isLineChard: false,
    };
    this.calculateAverage =
    this.calculateAverage.bind(this);
    this.studentArray = this.studentArray.bind(this);
    this.assignmentArray = this.assignmentArray.bind(this);
    this.setStudentState = this.setStudentState.bind(this);
    this.getRandomProfile =this.getRandomProfile.bind(this)
    
  }

  getRandomProfile = (names) => {
        const person = names[Math.floor(Math.random() * names.length)];
         return person;
       };

  studentArray = () => {
    const students = this.state.data.map((item) => item.name);
    const singleStudents = Array.from(new Set(students));
    return singleStudents;
  };

  assignmentArray = () => {
    const assignments = this.state.data.map((item) => item.assignment);
    const singleAssignments = Array.from(new Set(assignments));

    return singleAssignments;
  };
   setStudentState = () => {
     const studentArray = this.studentArray();
     return studentArray.map((student) => {
       return data.filter((obj) => obj.name === student);
     });
   };

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

  componentDidMount = () => {
    const assignmentObject = this.calculateAverage();
    const studentsArray = this.studentArray()
    this.setState({assignments:this.assignmentArray()})
    this.setState({ averages: assignmentObject });
    this.setState({ students: studentsArray });
    this.setState({ profiles: this.getRandomProfile(ProfileData) });
  };

  handleChange = (event) => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };

  sortRating = (e, prop) => {
    const ratingAscending = [...this.state.averages].sort((a, b) =>
      prop === "difficultyRate"
        ? a.difficultyRate - b.difficultyRate
        : a.enjoymentRate - b.enjoymentRate
    );

    const ratingDescending = [...this.state.averages].sort((a, b) =>
      prop === "difficultyRate"
        ? b.difficultyRate - a.difficultyRate
        : b.enjoymentRate - a.enjoymentRate
    );

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
        />
      </div>
    );
  }
}

export default Container;
