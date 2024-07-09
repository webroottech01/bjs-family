import React, { useState } from "react";
import "./header.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const [hoveredImages, setHoveredImages] = useState({
    "About BJS": process.env.PUBLIC_URL + "images/about-delivery.png",
    Us: process.env.PUBLIC_URL + "images/us-default.png",
  });

  const menuItems = [
    {
      name: "Our Services",
      link: "/services",
    },
    {
      name: "About BJS",
      subMenu: [
        {
          name: "Our Values",
          link: "/our-values",
          image: process.env.PUBLIC_URL + "images/about-delivery.png",
        },
        {
          name: "Technology",
          link: "/technology",
          image: process.env.PUBLIC_URL + "images/julian.jpg",
        },
      ],
      defaultImage: process.env.PUBLIC_URL + "images/about-delivery.png",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];

  // const usMenuItems = [
  //   { name: 'Uk', link: '/our-values', image: process.env.PUBLIC_URL + 'images/about-delivery.png' },
  //   { name: 'Us', link: '/our-values', image: process.env.PUBLIC_URL + 'images/angle-right.png' },
  // ];

  const handleMouseEnter = (dropdownName, image) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [dropdownName]: image,
    }));
  };

  const handleMouseLeave = (dropdownName, defaultImage) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [dropdownName]: defaultImage,
    }));
  };

  return (
    <div className="header sticky-top">
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand>
            <LinkContainer to="/">
              <img
                src={process.env.PUBLIC_URL + "/FamilyLogo.png"}
                alt="Family Logo"
              />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mainNavigation">
              {menuItems.map((item, index) =>
                item.subMenu ? (
                  <NavDropdown
                    title={item.name}
                    id={`nav-dropdown-${index}`}
                    key={index}
                    className="custom-dropdown" // Add custom class for styling
                  >
                    <div className="dropdown-menu-container">
                      <div className="dropdown-image">
                        <img
                          src={hoveredImages[item.name] || item.defaultImage}
                          alt="Hovered"
                        />
                      </div>
                      <div className="dropdown-items">
                        {item.subMenu.map((subItem, subIndex) => (
                          <LinkContainer to={subItem.link} key={subIndex}>
                            <NavDropdown.Item
                              onMouseEnter={() =>
                                handleMouseEnter(item.name, subItem.image)
                              }
                              onMouseLeave={() =>
                                handleMouseLeave(item.name, item.defaultImage)
                              }
                            >
                              {subItem.name}
                            </NavDropdown.Item>
                          </LinkContainer>
                        ))}
                      </div>
                    </div>
                  </NavDropdown>
                ) : (
                  <LinkContainer to={item.link} key={index}>
                    <Nav.Link>{item.name}</Nav.Link>
                  </LinkContainer>
                )
              )}
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto navbarsecond">
            <Nav.Link href="#home">
              <button className="talktous">Talk to us</button>
            </Nav.Link>
            <NavDropdown title="Us" id="basic-nav-dropdown" className="flags">
              <h5>Choose your region</h5>
              <div className="regional-drop">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "images/uslogo.png"}
                    alt=""
                  />
                  <p className="region-title">United States</p>
                  <p>
                    Proident kale chips vegan, succulents shaman ennui unicorn
                    bespoke forage jean shorts blackbird spyplane helvetica
                    edison bulb eiusmod scenester.
                  </p>
                  <a href="#" className="currentregion" disabled>
                    Currently viewing
                  </a>
                </div>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "images/uklogo.png"}
                    alt=""
                  />
                  <p className="region-title">United Kingdom</p>
                  <p>
                    Proident kale chips vegan, succulents shaman ennui unicorn
                    bespoke forage jean shorts blackbird spyplane helvetica
                    edison bulb eiusmod scenester.
                  </p>
                  <a href="#" className="currentregion">
                    Switch to UK Site
                  </a>
                </div>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
