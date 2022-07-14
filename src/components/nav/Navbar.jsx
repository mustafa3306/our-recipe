import Nav, {Logo} from "./Navbar.style";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Logo to="/">
        <i>{"<ED8En/>"}</i><span>RECIPE</span>
      </Logo>
      <div>
        <Link to="about">ABOUT</Link>
        <Link to="login">LOGOUT</Link>
        <Link to="">REGISTER</Link>
      </div>
    </Nav>
  )
}

export default Navbar