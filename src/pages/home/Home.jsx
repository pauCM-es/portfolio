import React from 'react'
import Button from '../../components/buttons/Button';
import "./Home.scss"

const Home = ({setShowPage}) => {
  
  return (
    <div className='page-home'>
      <div className="bg bg-left"></div>
      <div className="bg bg-right"></div>

      <div className='page-content'>

        <section className="page-title">
          <div className="page-title_name">PAULA</div>
          <div className="page-title_surname">COSTA</div>
        </section>

        <section className="page-captcha">
          <div className="page-captcha_description">FULL STACK DEVELOPER</div>
        </section>

      </div>
      
      <Button key="btn-knowMore"  text="KNOW MORE" className="page_btn primary big" goTo={["about", setShowPage]}/>

    </div>
  )
}

export default Home