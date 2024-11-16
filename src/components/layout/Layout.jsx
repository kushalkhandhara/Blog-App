import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import Container from "react-bootstrap/esm/Container";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="w-100 overflow-hidden">
      <Navbar/>
      <main className="flex flex-col w-100">
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </div>
  )
}
