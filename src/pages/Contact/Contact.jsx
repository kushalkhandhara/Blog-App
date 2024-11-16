import "./Contact.css";
import Header from "../../components/header/Header";
import Section1 from "./Sections/Section1";

export default function Contact() {
  return (
    <div className="contact">
        <Header/>
        <div className="container mt-3">
            <Section1/>
        </div>
    </div>
  )
}
