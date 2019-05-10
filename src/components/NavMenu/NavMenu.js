import React, { Component } from "react";
import "./NavLink.css";
// import NavLink from "./NavLink";

function NavLink(props) {  // stateless functional component
  return (
    <a href={props.info.url} className="main-link">{props.info.label}</a>
  )
}

export default class NavMenu extends Component {
  render() {
    let links = [
      { id: 1, label: "Home", url: "#home" },
      { id: 2, label: "Products", url: "#products" },
      { id: 3, label: "Services", url: "#services" },
      { id: 4, label: "Contact", url: "#contact" }
    ];
    return (
      <nav className="main-nav">
        {links.map(item => (
          <NavLink key={item.id} info={item} />
        ))
        }

        {/* <NavLink info={links[0]}/>
         <NavLink info={links[1]}/>
         <NavLink info={links[2]}/>
         <NavLink info={links[3]}/> */}

        {/* <a href="#home" className="main-link">Home</a>
      <a href="#products" className="main-link">Products</a>
      <a href="#services" className="main-link">Services</a>
      <a href="#contact" className="main-link">Contact Us</a> */}
      </nav>
    );
  }
}
