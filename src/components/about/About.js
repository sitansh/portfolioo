import React from 'react'
import "./about.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
          <div className='a-card bg'></div>
          <div className='a-card'>
              <img src='https://www.koimoi.com/wp-content/new-galleries/2022/03/hrithik-roshan-once-called-his-thumb-piece-of-ugly-001.jpg' alt='' className='a-img' />
          </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        </p>
        <p className='a-desc'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <div className='a-award'>
            <img src={Award} alt="" className='a-award-img' />
            <div className='a-award-texts'>
                <h4 className='a-award-title'>International Desinor of Year</h4>
                <p className='a-award-desc'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default About