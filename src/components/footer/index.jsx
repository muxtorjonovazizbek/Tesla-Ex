import React from 'react'
import ArrowLogo from '../../assets/arrow.svg'
import './style.scss'

const Index = () => {
  return (
    <div>
        
        <div className="footer">
          <div className="footer__inner container">
            <div className="footer__left">
              <div className='left__text__box'>
                <h4>396 mi</h4>
                <p>Range (EPA est.)</p>
              </div>
              <div className='left__text__box'>
                <h4>1.99 s</h4>
                <p>0-60 mph*</p>
              </div>
              <div className='left__text__box'>
                <h4>200mph</h4>
                <p>Top Speed†</p>
              </div>
              <div className='left__text__box'>
                <h4>1,020hp</h4>
                <p>Peak Power</p>
              </div>
            </div>

            <div className="footer__right">
              <button className='order__btn'>Order Now</button>
              <img className='right__img' src={ArrowLogo} alt="arrow-logo" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index