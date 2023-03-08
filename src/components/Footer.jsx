import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__logo"></div>
      <div className="footer__nav_wrapper">
        <p>Home</p>
        <p>Recipes</p>
        <p>Article</p>
        <p>Contact</p>
        <p>Purchase</p>
      </div>
      <div className="footer__social__wrapper">
        <div className="brand__icon_dec">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="brand__icon_dec icon_sel">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="brand__icon_dec">
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
        <div className="brand__icon_dec">
          <FontAwesomeIcon icon={faGooglePlusG} />
        </div>
        <div className="brand__icon_dec">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="brand__icon_dec">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div className="hr_decor"></div>
      <p className="footer__rights">@2019 Logwork. All Right Reserved.</p>
    </div>
  )
}

export default Footer
