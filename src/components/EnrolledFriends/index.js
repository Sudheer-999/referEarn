import "./index.css";
import { BiChevronRight } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const EnrolledFriends = () => (
  <div className="enrolled-container">
    <div className="enrolled-navigator">
      <p>UI/UX</p>
      <BiChevronRight />
      <p>Refer & Earn</p>
      <BiChevronRight />
      <p>Friends Referred</p>
    </div>
    <Link to="/" className="link">
      <div className="sm-back-option">
        <IoMdArrowRoundBack />
        <span className="back">go back</span>
      </div>
    </Link>
    <div className="balance-details">
      <div className="referral-code-section">
        <img
          src="https://res.cloudinary.com/djzsbpran/image/upload/v1684922666/Your_Referral_Code_1_afml19.png"
          alt="refer code"
          className="refer-code"
        />
      </div>
      <div className="wallet-block">
        <p className="wallet-head">Wallet Balance</p>
        <p className="balance-price">₹ 500</p>
      </div>
    </div>
    <h1 className="cards-head">
      Friends who enrolled<span className="count">(3)</span>
    </h1>
    <div className="enrolled-cards-section">
      <div className="cards-container">
        <div className="card">
          <div className="card-top">
            <p className="title">Dhiraj Saxsena</p>
            <p className="date">14 Sep, 2022</p>
          </div>
          <p className="small-head">Courses Enrolled(6)</p>
          <ul className="courses-list">
            <li className="course">UI/UX</li>
            <li className="course">Photoshop</li>
            <li className="course">Illustrator</li>
            <li className="course">Python</li>
            <li className="course">MERN</li>
            <li className="course">Java</li>
          </ul>
          <p className="amount-head">
            Referral Amount <span className="earned-amount"> ₹185</span>
          </p>
        </div>
        <div className="card">
          <div className="card-top">
            <p className="title">Dhiraj Saxsena</p>
            <p className="date">14 Sep, 2022</p>
          </div>
          <p className="small-head">Courses Enrolled(6)</p>
          <ul className="courses-list x">
            <li className="course">UI/UX</li>
            <li className="course">Photoshop</li>
            <li className="course">Illustrator</li>
            <li className="course">Python</li>
            <li className="course">MERN</li>
            <li className="course">Java</li>
            <li className="course">C++</li>
            <li className="course">React</li>
            <li className="course">Angular</li>
            <li className="course">Wordpress</li>
          </ul>
          <p className="amount-head">
            Referral Amount <span className="earned-amount"> ₹485</span>
          </p>
        </div>
        <div className="card">
          <div className="card-top">
            <p className="title">Dhiraj Saxsena</p>
            <p className="date">14 Sep, 2022</p>
          </div>
          <p className="small-head">Courses Enrolled(6)</p>
          <ul className="courses-list">
            <li className="course">UI/UX</li>
            <li className="course">Photoshop</li>
            <li className="course">Illustrator</li>
            <li className="course">Python</li>
            <li className="course">MERN</li>
            <li className="course">Java</li>
          </ul>
          <p className="amount-head">
            Referral Amount <span className="earned-amount"> ₹485</span>
          </p>
        </div>
      </div>
    </div>
    <p className="terms">Terms & Conditions</p>
  </div>
);

export default EnrolledFriends;
