import React, { useState, useEffect } from "react";
import Menu from "./UpMovieItemMenu";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import $ from "jquery";
import axios from "axios";

const Footer = () => {
  const [tamil, setTamil] = useState(Menu);
  const [kannada, setKannada] = useState(Menu);
  const [hindi, setHindi] = useState(Menu);
  const [malayalam, setMalayalam] = useState(Menu);
  const [telugu, setTelugu] = useState(Menu);

  useEffect(async () => {
    await axios.get(`http://localhost:8080/tamil/`).then((response) => {
      setTamil(response.data);
    });
    await axios.get(`http://localhost:8080/kannada/`).then((response) => {
      setKannada(response.data);
    });
    await axios.get(`http://localhost:8080/hindi/`).then((response) => {
      setHindi(response.data);
    });
    await axios.get(`http://localhost:8080/malayalam/`).then((response) => {
      setMalayalam(response.data);
    });
    await axios.get(`http://localhost:8080/telugu/`).then((response) => {
      setTelugu(response.data);
    });
  }, []);
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <footer>
      <motion.div className="footer-top-wrap">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-menu">
                  <nav>
                    <ul className="navigation">
                      <li
                        className={`"menu-item-has-children" ${
                          tabIndex === 0 ? "active" : ""
                        }`}
                      >
                        <Link to="/"> Home </Link>
                      </li>

                      <motion.li
                        className={`"menu-item-has-children" ${
                          tabIndex === 1 ? "active" : ""
                        }`}
                      >
                        <a
                          onClick={() => {
                            setTabIndex(1);
                            navigate("/tv-show", {
                              state: { data: tamil, title: "Tamil" },
                            });
                          }}
                        >
                          tamil
                        </a>
                      </motion.li>
                      <motion.li
                        className={`"menu-item-has-children" ${
                          tabIndex === 2 ? "active" : ""
                        }`}
                      >
                        <a
                          onClick={() => {
                            setTabIndex(2);
                            navigate("/tv-show", {
                              state: { data: kannada, title: "Kannada" },
                            });
                          }}
                        >
                          kannada
                        </a>
                      </motion.li>
                      <motion.li
                        className={`"menu-item-has-children" ${
                          tabIndex === 3 ? "active" : ""
                        }`}
                      >
                        <a
                          onClick={() => {
                            setTabIndex(3);
                            navigate("/tv-show", {
                              state: { data: hindi, title: "Hindi" },
                            });
                          }}
                        >
                          hindi
                        </a>
                      </motion.li>
                      <motion.li
                        className={`"menu-item-has-children" ${
                          tabIndex === 4 ? "active" : ""
                        }`}
                      >
                        <a
                          onClick={() => {
                            setTabIndex(4);
                            navigate("/tv-show", {
                              state: { data: telugu, title: "Telugu" },
                            });
                          }}
                        >
                          Telugu
                        </a>
                      </motion.li>
                      <motion.li
                        className={`"menu-item-has-children" ${
                          tabIndex === 5 ? "active" : ""
                        }`}
                      >
                        <a
                          onClick={() => {
                            setTabIndex(5);
                            navigate("/tv-show", {
                              state: { data: malayalam, title: "Malayalam" },
                            });
                          }}
                        >
                          malayalam
                        </a>
                      </motion.li>

                      {/* <li><a href="/tv-show">tv show</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    
                    <li><a href="/contact">contacts</a></li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-quick-link-wrap">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="quick-link-list">
                  <ul>
                    <li>
                      <a href="/#">FAQ</a>
                    </li>
                    <li>
                      <a href="/#">Help Center</a>
                    </li>
                    <li>
                      <a href="/#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="/#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="/#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </motion.div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright © 2022. All Rights Reserved By{" "}
                  <a href="/#">Movflx</a>
                </p>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-6">
              <div className="payment-method-img text-center text-md-right">
                <img src="img/images/card_img.png" alt="img" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
