import "./index.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => (
  <div className="header-container">
    <div className="header-left">
      <Link to="/" className="link">
        <img
          src="https://res.cloudinary.com/djzsbpran/image/upload/v1684739293/image_1_x8sr2e.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
    </div>
    <div className="header-right">
      <p className="head1">My Assignment</p>
      <p className="head1">Chat with Mentor</p>
      <div className="header-end">
        <img
          src="https://res.cloudinary.com/djzsbpran/image/upload/v1684739452/Vector_1_na6wb7.png"
          alt="contact icon"
          className="contact-icon"
        />
        <p>ProfileName</p>
        <img
          src="https://res.cloudinary.com/djzsbpran/image/upload/v1684739571/Vector_2_ljyybq.png"
          alt="down arrow"
          className="down-arrow"
        />
        <MdKeyboardArrowDown className="arrow-icon" />
      </div>
    </div>
  </div>
);

export default Header;
