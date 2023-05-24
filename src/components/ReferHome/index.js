import "./index.css";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const ReferHome = () => (
  <div className="home-container">
    <div className="navigator">
      <p>UI/UX</p>
      <BiChevronRight />
      <p>Refer & Earn</p>
    </div>
    <div className="home-body">
      <div className="top">
        <div className="earnings-card">
          <div className="card-top">
            <div className="card-item">
              <p className="card-item-head">Referral Earning</p>
              <p className="money">₹ 2,500</p>
            </div>
            <div className="card-item">
              <p className="card-item-head">Total Referrals</p>
              <p className="money">7</p>
            </div>
            <div className="card-item xx">
              <p className="card-item-head">Wallet Balance</p>
              <p className="money">₹ 500</p>
            </div>
          </div>
          <div className="button-con">
            <div className="card-item yy">
              <p className="card-item-head">Wallet Balance</p>
              <p className="money">₹ 500</p>
            </div>
            <button type="button" className="withdraw-button">
              Withdraw Balance
            </button>
          </div>
        </div>
        <div className="referral-section">
          <img
            src="https://res.cloudinary.com/djzsbpran/image/upload/v1684810517/Your_Referral_Code_b5tivc.png"
            alt="refer pic"
            className="refer-image"
          />
        </div>
      </div>
      <div className="middle-section">
        <h1 className="middle-head">How does it work ?</h1>
        <div className="features">
          <div className="feature-card">
            <div className="icon-bg">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684811019/Vector_3_qhtxrb.png"
                alt="icon"
                className="feature-icon"
              />
            </div>
            <div className="content-box">
              <p className="f-head">Invite your Friends</p>
              <p className="f-desc">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-bg">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684811019/Vector_5_ue5b03.png"
                alt="icon"
                className="feature-icon alpha"
              />
            </div>
            <div>
              <p className="f-head">Invite your Friends</p>
              <p className="f-desc">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-bg">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684811019/njfyukuaej6qnnsyi89r.png"
                alt="icon"
                className="feature-icon alphas"
              />
            </div>
            <div>
              <p className="f-head">Invite your Friends</p>
              <p className="f-desc">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-bg">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684811019/Vector_6_hw5opy.png"
                alt="icon"
                className="feature-icon alpha"
              />
            </div>
            <div>
              <p className="f-head">Invite your Friends</p>
              <p className="f-desc">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-bg">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684811019/Vector_4_is74rh.png"
                alt="icon"
                className="feature-icon alpha"
              />
            </div>
            <div>
              <p className="f-head">Invite your Friends</p>
              <p className="f-desc">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/enrolled" className="link">
          {" "}
          <p className="footer-text">Friends Who Enrolled</p>
        </Link>
        <p className="footer-text">Terms & Conditions</p>
      </div>
    </div>
  </div>
);

export default ReferHome;
