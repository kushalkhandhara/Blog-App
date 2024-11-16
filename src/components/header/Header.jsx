import { useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  console.log("Loaction Pathnam :",location.pathname);
  let title = "";
  if (location.pathname === "/") {
    title = "HOME";
  } else if (location.pathname === "/blog") {
    title = "BLOGS";
  }
  else if (location.pathname === "/about") {
    title = "ABOUT";
  } 
  else if (location.pathname === "/contact") {
    title = "CONTACT";
  } 
  else if (location.pathname === "/account") {
    title = "ACCOUNT";
  } 
  else {
    title = "None";
  }

  return (
    <div className="header   container">
      <h1>{title}</h1>
    </div>
  );
}
