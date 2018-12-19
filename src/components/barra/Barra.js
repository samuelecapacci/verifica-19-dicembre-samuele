import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';

export default class Barra extends React.Component {
  render() {
    return (
      <div className="Barra">
        <Navbar color="warning">
          <NavbarBrand href="/">Verifica-19-Dicembre</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
}