import react from "react";
import StudentMenu from "./StudentMenu";

function NavBar(props) {
  return (
    <nav className="nav-menu">
      <h1> Winc Student Dashboard</h1>

      <ul className="nav-menu__list">
        <li className="nav-menu__listItem">
          <a href="http://localhost:3000">Home</a>
        </li>

        <li
          className="nav-menu__listItem"
          onClick={(e) =>
            (document.getElementsByClassName(
              "students-menu__list"
            )[0].style.visibility = "visible")
          }
        >
          Students
        </li>
        <StudentMenu students={props.students} />
      </ul>
    </nav>
  );
}

export default NavBar;
