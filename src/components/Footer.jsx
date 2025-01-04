import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='links'>
        <a href="https://www.instagram.com/umnsesb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">      
            <div className='instagram'>
            <img src="src/img/instagram_icon.png" alt="" />
            </div> 
        </a>   
        <a href="https://www.facebook.com/umnsesb">      
            <div className='facebook'>
            <img src="src/img/facebook.png" alt="" />
            </div> 
        </a>               
        <a href="https://sesb.umn.edu/">      
            <div className='UMN'>
            <img src="src/img/UMN.png" alt="" />
            </div> 
        </a>            
        </div>
      </div>
    </div>
  )
}

export default Footer
