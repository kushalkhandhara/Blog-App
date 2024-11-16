import "./Account.css";
import Header from "../../components/header/Header"
import UserSection from "./Sections/UserSection/UserSection";

export default function Account() {
  return (
    <div className="account">
      <Header/>
      <div className="accountSections container my-4">
        <UserSection/>
      </div>
      
    </div>
  )
}
