import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="title-container">
        <h2 className="abtus-title">About Us</h2>
      </div>
        
        <div className="about-container">
          <div id="abt-serrin" className="abt-text">
            <h2 className="name-title">Serrin</h2>
            <p>Graduating from Hunter College in 2022. Currently employed at Brooklyn Game Labs. </p>
            <div className="nav-container">
              <a href="https://github.com/" rel="noreferrer" target="_blank">
                <div className='link-icon' id='github-icon'>
                  <GitHubIcon />
                </div>
              </a>
              <a href="https://www.linkedin.com/feed/" rel="noreferrer" target="_blank">
                <div className='link-icon' id='linkedin-icon'>
                  <LinkedInIcon />
                </div>
              </a>
            </div> 
          </div>
          <div id="abt-sadia" className="abt-text">
            <h2 className="name-title">Sadia</h2>
            <p>TEXT TEXT TEXT</p>
          </div>
          <div id="abt-chris" className="abt-text">
            <h2 className="name-title">Chris</h2>
            <p>TEXT TEXT TEXT</p>
          </div>
          <div id="abt-aida" className="abt-text">
            <h2 className="name-title">Aida</h2>
            <p>TEXT TEXT TEXT</p>
          </div>
        </div>
    </div>
  )
}

export default AboutUs