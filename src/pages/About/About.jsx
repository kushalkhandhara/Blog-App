import Header from "../../components/header/Header";
import "./About.css";
import Section1 from "./Sections/Section1/Section1";
import Section2 from "./Sections/Section2/Section2";

export default function About() {
  return (
    <div className="w-100 d-flex flex-column gap-4 mb-4">
        <Header/>
        <div className="about container d-flex flex-column gap-4 mt-3">
            <Section1/>
            <Section2/>
        </div>
    </div>
  )
}
