import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,  UncontrolledDropdown} from 'reactstrap';


class Newspage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
render() {
  return (
      <div>
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle id="navLink4" caret>
    <i className="far fa-newspaper"></i>NEWS
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem id="navLink" href="/About">ABOUT</DropdownItem>
      <DropdownItem id="navLink">Action</DropdownItem>
      <DropdownItem id="navLink">Another Action</DropdownItem>
      <DropdownItem id="navLink">Another Action</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
   </div>

    );
  }
}

export default Newspage;