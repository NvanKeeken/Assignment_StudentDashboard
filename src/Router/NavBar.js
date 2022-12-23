import react from "react";

function NavBar(props) {
  const listItem = props.students.map((student) => {
    return (
      <li key={student}>
        <a href={`http://localhost:3000/${student}`}>{student}</a>
      </li>
    );
  });

  return (
    
    <nav className="nav-menu">
      <h1> Winc Student Dashboard</h1>
      <ul
        className="nav-menu-list"
        style={{ display: "flex", listStyle: "none" }}
      >
        <li className="menu-button">
          <a href="http://localhost:3000">Home</a>
        </li>

        <li className="menu-button"
        onClick={(e) => 
          document
           .getElementsByClassName("dropdown-students")[0]
           .style.visibility = "visible"}>Students</li>

        <div className="students-container"
        onMouseLeave={(e) => 
          document
           .getElementsByClassName("dropdown-students")[0]
           .style.visibility = "hidden"}>
             
          <ul className="dropdown-students">{listItem}</ul>
    </div>
      </ul>
    </nav>
  );
}

export default NavBar;
