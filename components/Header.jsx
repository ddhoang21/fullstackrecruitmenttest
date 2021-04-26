import React from 'react';
import Image from 'next/image';
import {Navbar} from 'react-bootstrap';

const Header = () => (
  <Navbar className='Header'>
    <Navbar.Brand href=''>
      <Image
        src='/logo.svg'
        width='150'
        height='25'
        className='d-inline-block align-top'
        alt='Skyscanner'
      />
    </Navbar.Brand>
  </Navbar>
);

export default Header;
