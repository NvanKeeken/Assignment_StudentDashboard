import react from "react";
import BarChard from "../chard/BarChard";
import Checkbox from "../slice-and-dice/Checkbox";
import Footer from "./Footer";
import SortingForm from "../sort/SortingForm";
import LineChard from "../chard/LineChard";
import CheckLineChard from "../slice-and-dice/CkeckLineChard";
import Profile from "./Profile";

function StudentPage(props) {
  const studentChardData = props.studentData.filter(
    (object) => object.name === props.student
  );
  return (
    <main className="studentPage-container">
     
     <div className="studentPage-container-header">
    <Profile student={props.student} data={props.data}/>
    <div className="studentPage-container-checkboxes">
    <CheckLineChard data={props.data} onChange={props.onChange}/>
     
      <h2>
        Rating per Assignment from: {props.student}
        {props.data.profiles.last_name}
      </h2>
      
      
      
      <Checkbox data={props.data} onChange={props.onChange} />
      </div>
      </div>
      {props.data.isLineChard ? 
          <LineChard data={props.data} chardData={studentChardData}/> 
          :
         <BarChard data={props.data} chardData={studentChardData}/> 
         }
     
      <Footer />
    </main>
  );
}

export default StudentPage;
