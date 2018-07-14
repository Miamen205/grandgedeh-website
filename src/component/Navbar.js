import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand,   UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
          <Navbar id="myNavbar"  className="navbar navbar-default navbar-fixed-top" role="navigation" color="faded" light>
          <NavbarBrand id="navLink3" href="/" className="mr-auto"><i className="fas fa-home"></i>Home</NavbarBrand>
          <NavbarBrand id="navLink2" href="/About" className="mr-auto"><i className="fas fa-address-card"></i>About</NavbarBrand> 
          <NavbarBrand id="navLink2" href="/contact" className="mr-auto"><i className="fas fa-phone-square"></i>contact Us</NavbarBrand>
          <UncontrolledDropdown >
                <DropdownToggle  id="navLink4" nav caret>
                <i className="fas fa-globe"></i>LEADERSHIP
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem id="navLink">
                    Option 1
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 2
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 3
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 4
                  </DropdownItem >
                  <DropdownItem divider />
                  <DropdownItem id="navLink">
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
      <NavbarBrand  className="mr-auto"></NavbarBrand> 
          <NavbarBrand id="navLink2" href="/Death" className="mr-auto"><i className="fas fa-user-minus"></i>Death</NavbarBrand>
          <NavbarBrand id="navLink2" href="/Chapters" className="mr-auto"><i className="fas fa-book"></i>Chapters</NavbarBrand>
          <UncontrolledDropdown >
                <DropdownToggle  id="navLink4" nav caret>
                <i className="far fa-newspaper"></i> NEWS
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem id="navLink">
                    Option 1
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 2
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 3
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 4
                  </DropdownItem >
                  <DropdownItem divider />
                  <DropdownItem id="navLink">
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          <NavbarBrand  className="mr-auto"></NavbarBrand>
          <UncontrolledDropdown >
                <DropdownToggle  id="navLink4" nav caret>
                <i className="fas fa-link"></i> LINKS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem id="navLink">
                    Option 1
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 2
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 3
                  </DropdownItem>
                  <DropdownItem id="navLink">
                    Option 4
                  </DropdownItem >
                  <DropdownItem divider />
                  <DropdownItem id="navLink">
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
        <hr />
    </div>
    );
  }
}
export default Navigation;