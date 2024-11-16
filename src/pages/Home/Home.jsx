import Header from "../../components/header/Header";
import "./Home.css";
import PopularBlog from "./Popular/PopularBlog";

export default function Home() {
  return (
    <div className="w-100 d-flex flex-column gap-3">
      <Header/>
      <PopularBlog/>
    </div>
  )
}
