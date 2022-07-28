import React from 'react';

import './Header.css';

import ledger from '../Header/ledger.mp4';
import ledger1 from '../Header/ledger1.webm';
import ledger2 from '../Header/ledger2.ogv';

const Header = () => (
  <div className="video">
  <video autoPlay loop defaultMuted>
    <source src={ledger} type="video/mp4" />
    <source src={ledger1} type="video/webm" />
    <source src={ledger2} type="video/ogg" />
  </video>
  <section class="row ">
    <h1 className="header">
      THE MOST SECURE <br></br>
      CRYPTOCURRENCY & NFT <br></br>
      WALLET
    </h1>



    <h4 className="paragraph">Securely manage, buy and grow your crypto and <br></br>
      NFTs on Ledger Live</h4>

      <div class="row ">
	<div class="spb_button spb_content_element col-sm-12" data-align="center" data-animation="none" data-delay="0">
		<div class="spb-asset-content">
			<a class="sf-button standard white default  sf-button-rounded" href="/SpecialMenu" target="_self" rel=""><span class="text">Get Started</span></a>
		</div>
	</div> </div>

  <div>
<h4 className="footer">By tapping “Get Started” you consent and agree to our <br></br>
<strong>Terms of Service</strong> and <strong>Privacy Policy</strong></h4>
  </div>
  </section>
</div>

  
);

export default Header;
