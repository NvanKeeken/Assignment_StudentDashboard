import React from "react";

// Bonus: profile with mock data from Mockaroo 
function Profile(props) {
  return (
    <div className="profile">

      <img
        className="profile__picture"
        src={props.data.profiles.photo}
        alt="student-profile"
      ></img>
      <h3>Student</h3>
      <p>
        Name: {props.student} {props.data.profiles.last_name}
      </p>
      <p>Age: {props.data.profiles.age}</p>
      <p>E-mail: {props.data.profiles.email}</p>
      <p>Phone-number: {props.data.profiles.phone}</p>

    </div>
  );
}

export default Profile;
