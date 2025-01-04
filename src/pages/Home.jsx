import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
      <div className="home">
          <div className="banner">
              <img src="src/img/banner.jpg" alt="" />
              <div className="banner-text">
                  <span>Freezin' for a Reason 5K</span>
              </div>
              
          </div>
          <div className="non-banner">
          <div className="info">
              <div className="location">
                  <span>Location:</span>
                  222 Pleasant Street Se <br />
                  Robert H. Bruininks Hall 220 <br />
                  Minneapolis, MN US 55455 <br /> <br /> <br /><br /><br />
              </div>
              <div className="description">
                  <span>Description:</span>
                    Run in the UMN College of Science and Engineering Student Board's annual Freezin' for a Reason 5K on November 17th! Registration includes post-run hot chocolate and snacks, as well as a stylish T-Shirt. <br />
                    This year's Freezin' for a Reason 5k is benefiting Second Harvest Heartland, a hunger-relief organization dedicated to helping address hunger needs and food insecurity across MN and WI. Learn more about Second Harvest here. <a href="https://www.2harvest.org/">Link</a><br />
                    Race check-in and bag check will occur at Bruininks Hall, room 220, starting at 2:30PM. Runners need to be ready to race at 3:30PM. Post-event hot chocolate and snacks will be provided after the race until 5:30PM. <br /> <br />
                  Race Map: <Link to="/map">Link</Link><br /> <br />
                  Want to Volunteer? <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_xpDKufaTWbIAyQUFilav1eHcR9f14EbyW1b9O_-N7rv-GA/viewform?usp=sf_link"> Link</a>
              </div>
          </div>
          </div>
          </div>
  )
}

export default Home
