import React from 'react';

import './Error.css';
import { images } from '../../constants';



const error = () => (

    <div>
      <container>
        <div className="error">
        <center>
<img className="error_img" src={images.error} alt="img"/></center>
<center className="margin_error">
<h className="error_text">Something went wrong. Please<br></br>
reconnect your device.</h></center>
<center className="margin_error">
<h className="error_text2">Ledger device: INS_NOT_SUPPORTED<br></br>
(0x6d00)</h></center>

<div class="button_margin1 ">
	<div class="spb_button1 spb_content_element1 col-sm-121" data-align="center" data-animation="none" data-delay="0">
		<div class="spb-asset-content1">
			<a class="sf-button1 standard white default  sf-button-rounded1" href="/Import" target="_self" rel=""><span class="text1">connect manually</span></a>
		</div>
	</div> </div>
</div>
</container>
</div>


);

export default error;
