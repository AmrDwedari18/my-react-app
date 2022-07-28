import React from 'react';

import { images } from '../../constants';
import './Navbar.css';


const Navbar = () => (

<div className="navbar_row">
  <div className="logo">
    <img src={images.logo} alt="main" width="95" height="65" />
  </div>
</div>
);

export default Navbar;
