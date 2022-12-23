import react from "react";
import BarChard from "../chard/BarChard";
import Checkbox from "../slice-and-dice/Checkbox";
import Footer from "./Footer";
import SortingForm from "../sort/SortingForm";
import LineChard from "../chard/LineChard";
import CheckLineChard from "../slice-and-dice/CkeckLineChard";

function StudentPage(props) {
  const studentChardData = props.studentData.filter(
    (object) => object.name === props.student
  );
  return (
    <main className="studentPage-container">
     <div className="profile">
        <img className="profile-picture" src={props.data.profiles.photo}></img>
        <h3>Student</h3>
        <p>
          Name: {props.student} {props.data.profiles.last_name}
        </p>
        <p>E-mail: {props.data.profiles.email}</p>
        <p>Phone-number: {props.data.profiles.phone}</p>
      </div>
      <CheckLineChard data={props.data} onChange={props.onChange}/>
     
      <h2>
        Rating per Assignment from: {props.student}
        {props.data.profiles.last_name}
      </h2>
      
      
      <Checkbox data={props.data} onChange={props.onChange} />
      {props.data.isLineChard ? 
          <LineChard data={props.data} chardData={studentChardData}/> 
          :
         <BarChard data={props.data} chardData={studentChardData}/> 
         }
      {/* <BarChard chardData={studentChardData} data={props.data} /> */}
     
      <Footer />
    </main>
  );
}

export default StudentPage;
