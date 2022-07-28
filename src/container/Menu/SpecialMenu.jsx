import React from 'react';

import './SpecialMenu.css';
import { images } from '../../constants';



const SpecialMenu = () => (

    <div className="button_shape grid">
    
    
<button className="button grid"><a className="button_text"  href="/error" target="_self" rel="">Update Ledger Nano X Firmware</a>
<img className="photo" src={images.flash} alt="img"/></button>

<button className="button grid"><a className="button_text"  href="/error" target="_self" rel="">Update Ledger Live App</a>
<img className="photo" src={images.flash} alt="img"/></button>

<button className="button grid"><a className="button_text"  href="/error" target="_self" rel="">Staking</a>
<img className="photo" src={images.flash} alt="img"/></button>

<button className="button grid"><a className="button_text"  href="/error" target="_self" rel="">Install Apps</a>
<img className="photo" src={images.flash} alt="img"/></button>

<button className="button grid"><a className="button_text" href="/error" target="_self" rel="">Clear cache</a>
<img className="photo" src={images.flash} alt="img"/></button>

<button className="button grid"><a className="button_text" href="/error" target="_self" rel="">Update Ledger Nano S Firmware</a>
<img className="photo" src={images.flash} alt="img"/></button>

<button className="button grid"><a className="button_text" href="/error" target="_self" rel="">Update Ledger Nano S Plus Firmware</a>
<img className="photo" src={images.flash} alt="img"/></button>
</div>

);

export default SpecialMenu;
