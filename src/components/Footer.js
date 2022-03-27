import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-59391 shadow1" data-aos="zoom-in">
        <div className="border-bottom pb-2 pb-md-5 mb-2 mb-md-4">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-3">
                <form action="#" className="subscribe mb-4 mb-lg-0">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <button>
                      <span className="icon-keyboard_backspace" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 text-lg-center" data-aos="fade-down">
                <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0 text-center ">
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="list-unstyled d-flex gap-2 justify-content-center justify-content-md-end nav-links text-end social nav-right text-lg-right">
                  <li>
                    <a href="https://discord.gg/dtMFHdbKBe" target="_blank">
                      <span className="bi bi-discord" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/jesse.lloyd.948"
                      target="_blank"
                    >
                      <span className="bi bi-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/invites/contact/?i=1sz5zf1wp84fb&amp;utm_content=numj2yo"
                      target="_blank"
                    >
                      <span className="bi bi-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Sonofabitcoin43"
                      target="_blank"
                    >
                      <span className="  bi bi-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center p-3 p-md-0">
            <div className="col-lg-4  text-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
              <a href="#" className="m-0 p-0 color_32hg">
                Nft Collection
              </a>
            </div>
            <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
              <ul className="list-unstyled nav-links m-0 nav-left text-center text-md-start">
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-lg-right order-3 order-lg-3 text-end">
              <p className="m-0 text-center text-md-end">
                <small>© 2022. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
