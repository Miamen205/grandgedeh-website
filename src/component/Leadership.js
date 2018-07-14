import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Leadershippage extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    
    render() {
      return (
          <div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle id="navLink4" caret>
        LEADERSHIP
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="navLink" href="/About">About</DropdownItem>
          <DropdownItem id="navLink">Action</DropdownItem>
          <DropdownItem id="navLink">Another Action</DropdownItem>
          <DropdownItem id="navLink">Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
       </div>

    );
  }
}

export default  Leadershippage;