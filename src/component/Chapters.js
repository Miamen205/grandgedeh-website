import React, { Component } from 'react';
import Navigation from"./Navbar";
import gedehLogo from './gedehLogo.png';
import { Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler, NavbarBrand,   UncontrolledDropdown, } from 'reactstrap';
// import FontAwesome from 'react-fontawesome';
import LiberiaFlag from './LiberiaFlag.gif';



class Chapterspage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
    render() {
      return (
        <div id="Chapters"className="App">
        
 <header className="App-header">
 <img src={gedehLogo} className="App-logo" alt="logo" />
 <img src={LiberiaFlag} className="logo" alt="logo" />
 <h1 className="App-title">Grand Gedeh Association In the Americas</h1>
        </header>
        <Navigation>{Navigation}</Navigation>
       
        <br/>
        
        <Row>
        <Col xs="6" sm="4"><h2>G.G.A.A Chapters</h2></Col>
        </Row>

        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
        <Row>
          
        <Col >  <UncontrolledDropdown > <i class="fas fa-user"></i>
        <DropdownToggle caret>
        Arizona
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
      </Col> 
          
          <Col> <UncontrolledDropdown >
        <DropdownToggle caret>
         Minnesota 
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Utah
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Verginia
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Pennsylvania
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
        </Row>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
        <Row>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          South Dakota
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Ilinois
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Kentucky Tennessee
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Washington Oregon
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Iowa
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
        </Row>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
        <Row>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Rhode Island
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Georgia
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          New England
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Ohio
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Florida
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
        </Row>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
        <Row>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          North Dakota
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Texas
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Indiana
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
          Missouri
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
          <Col><UncontrolledDropdown >
        <DropdownToggle caret>
         New York
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
     </UncontrolledDropdown></Col>
        </Row>
        </Container>
        <br/>
        <br/>
        </div>

    );
  }
}

export default  Chapterspage;