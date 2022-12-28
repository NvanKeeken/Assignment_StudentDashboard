import react from "react";
import BarChard from "../chard/BarChard";
import Checkbox from "../slice-and-dice/Checkbox"
import LineChard from "../chard/LineChard";
import CheckLineChard from "../slice-and-dice/CkeckLineChard";
import Profile from "./Profile";

function StudentPage(props) {
  // filters data on objects from the same student defined in the props
  const studentChardData = props.data.data.filter(
    (object) => object.name === props.student
  );

  return (
    <main className="studentPage-container">
      <div className="studentPage-container__head">
        <Profile student={props.student} data={props.data} />

        <div className="studentPage-container__checkboxes">
          <CheckLineChard data={props.data} onChange={props.onChange} />
          <h2>
            Rating per student:
            {` ${props.student} ${props.data.profiles.last_name}`}
          </h2>
          <Checkbox data={props.data} onChange={props.onChange} />
        </div>

        {/* Checks if isLineCard is true , then it displays a line chard, else a barchard */}
      </div>
      {props.data.isLineChard ? (
        <LineChard data={props.data} chardData={studentChardData} />
      ) : (
        <BarChard
          xAs={"assignment"}
          data={props.data}
          chardData={studentChardData}
        />
      )}
    </main>
  );
}

export default StudentPage;
