import card10 from '../components/img/card10.png'
import social_card1 from '../components/img/social_card1.png'
import social_card2 from '../components/img/social_card2.png'
import social_card3 from '../components/img/social_card3.png'
import social_card4 from '../components/img/social_card4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faPinterest,
  faTwitter,
  faVimeoV,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

let socialMediaIcon = [
  [faFacebookF, '32k', 'likes'],
  [faPinterest, '814', 'followers'],
  [faVimeoV, 165, 'followers'],
  [faBasketball, '6k', 'followers'],
  [faTwitter, '130k', 'followers'],
  [faPinterest, '37k', 'followers'],
  [faInstagram, '854k', 'followers'],
  [faYoutube, '  52k', 'subscribers'],
  [faGooglePlusG, '   642', 'followers'],
]

let socialMediaTags = [
  'Business',
  'Freelance',
  'Money',
  'Experience',
  'Lifestyle',
  'SEO',
  'Wordpress',
  'Marketing',
  'UX',
  'Modern',
  'Success',
  'Nature',
]
function Social() {
  return (
    <section
      classNameName="social__section__wrapper"
      style={{ width: '270px', height: '2566px' }}
    >
      <div className="social__section__title">About the author</div>

      <div className="social__card1__container  z-depth-2">
        <div className="social__card1__img">
          <img src={social_card1} alt="карточка" />
        </div>
        <div className="social__card1__content">
          <h2 className="social__block_card1">Kate Willems</h2>
          <p className="social__card1__decor">Food & cooking bloger</p>
          <p className="social__card1__common">
            Hi, I'm Sonia. Cooking is the way I express my creative side to the
            world. Welcome to my Kitchen Corner on…
          </p>
        </div>
        <div className="social__card1__st">
          <p>Continue Reading</p>
        </div>
      </div>

      <div className=" social__section__title"> Featured posts</div>
      <div className="row">
        <div className="col ">
          <div className="card">
            <div className="card-image">
              <img src={social_card2} alt="карточка" />
            </div>
            <div className="card-content">
              <p className="main__item__title">Summer</p>
              <p className="main__item__contetn">
                One of Saturn’s largest rings <br /> may be newer than anyone
              </p>
              <p className="main__item__date">June 6, 2019 By Rickie Baroch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img src={social_card3} alt="карточка" />
            </div>
            <div className="card-content">
              <p className="main__item__title">Summer</p>
              <p className="main__item__contetn">
                One of Saturn’s largest rings <br /> may be newer than anyone
              </p>
              <p className="main__item__date">June 6, 2019 By Rickie Baroch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <div className="card">
            <div className="card-image">
              <img src={social_card4} alt="карточка" />
            </div>
            <div className="card-content">
              <p className="main__item__title">Summer</p>
              <p className="main__item__contetn">
                One of Saturn’s largest rings <br /> may be newer than anyone
              </p>
              <p className="main__item__date">June 6, 2019 By Rickie Baroch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="social__categories_block">
        <div className="social__section__title">Categories</div>
        <div className="social__section">
          <div className="social__section__item">
            <div>Fashion</div>
            <div>(23)</div>
          </div>
          <div className="social__section__item">
            <div>Style & clothes</div>
            <div>(7)</div>
          </div>
          <div className="social__section__item">
            <div>Minimalism</div>
            <div>(16)</div>
          </div>
          <div className="social__section__item">
            <div>Black & White</div>
            <div>(5)</div>
          </div>
          <div className="social__section__item last">
            <div>Modern clothes</div>
            <div>(12)</div>
          </div>
        </div>
      </div>
      <div className="social__section__title">Social media</div>
      <div className="social__section__item__container">
        {socialMediaIcon.map((item, i) => (
          <div className="social__section__item_wrapper" key={i}>
            <FontAwesomeIcon icon={item[0]} />
            <div>
              <p>
                {item[1]} <br /> {item[2]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="social__section__title mt">Tags</div>
      <div className="social__tags__container">
        {socialMediaTags.map((item, i) => (
          <div className="social__tags__item" key={i}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Social
