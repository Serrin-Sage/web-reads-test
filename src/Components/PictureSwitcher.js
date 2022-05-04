import React, { useState, useEffect } from 'react'

function PictureSwitcher({changePic}) {

  const [selectedPic, setPicture] = useState('')

  useEffect(()=> {
    const currentPicture = localStorage.getItem('profile-picture');
    if (currentPicture) {
      setPicture(currentPicture);
    }
  }, [selectedPic])

  const handleClick = (picture) => {
    setPicture(picture);
    localStorage.setItem('profile-picture', picture);
    changePic(picture);
  }
  return (
    <div className='picture-switcher'>
        <div className='pic-switch-title'>
          <h3>Profile Icon Selection</h3>
        </div>  
        <div className='profile-pic-container'>
        <h3>Default</h3> 
            <div className='default-picture-options'>
              <div id='default-icon'
                   onClick={() => handleClick('default-icon')}
                   className={`icon-div ${selectedPic === 'default-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Default</span>
              </div>
              <div id='cat-icon'
                   onClick={() => handleClick('cat-icon')}
                   className={`icon-div ${selectedPic === 'cat-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Cat</span>
              </div>
              <div id='dog-icon'
                   onClick={() => handleClick('dog-icon')}
                   className={`icon-div ${selectedPic === 'dog-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Dog</span>
              </div>
              <div id='alien-icon'
                   onClick={() => handleClick('alien-icon')}
                   className={`icon-div ${selectedPic === 'alien-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Alien</span>
              </div>
              <div id='monster-icon'
                   onClick={() => handleClick('monster-icon')}
                   className={`icon-div ${selectedPic === 'monster-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Monster</span>
              </div>
              <div id='rabbit-icon'
                   onClick={() => handleClick('rabbit-icon')}
                   className={`icon-div ${selectedPic === 'rabbit-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Rabbit</span>
              </div>
              <div id='writer-icon'
                   onClick={() => handleClick('writer-icon')}
                   className={`icon-div ${selectedPic === 'writer-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Writer</span>
              </div>
              
            </div>
          <h3>Random</h3> 
            <div className='random-picture-options'>
               <div id='stormtrooper-icon'
                   onClick={() => handleClick('stormtrooper-icon')}
                   className={`icon-div ${selectedPic === 'stormtrooper-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Stormtrooper</span>
               </div>
              <div id='hunter-icon'
                   onClick={() => handleClick('hunter-icon')}
                   className={`icon-div ${selectedPic === 'hunter-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Hunter</span>
               </div>
            </div>
          <h3>Flags</h3>
            <div className='flag-picture-options'>
               <div id='australia-icon'
                   onClick={() => handleClick('australia-icon')}
                   className={`icon-div ${selectedPic === 'australia-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Australia</span>
               </div>
               <div id='bangladesh-icon'
                   onClick={() => handleClick('bangladesh-icon')}
                   className={`icon-div ${selectedPic === 'bangladesh-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Bangladesh</span>
               </div>
               <div id='brazil-icon'
                   onClick={() => handleClick('brazil-icon')}
                   className={`icon-div ${selectedPic === 'brazil-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Brazil</span>
               </div>
               <div id='canada-icon'
                   onClick={() => handleClick('canada-icon')}
                   className={`icon-div ${selectedPic === 'canada-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Canada</span>
               </div>
               <div id='china-icon'
                   onClick={() => handleClick('china-icon')}
                   className={`icon-div ${selectedPic === 'china-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>China</span>
               </div>
               <div id='egypt-icon'
                   onClick={() => handleClick('egypt-icon')}
                   className={`icon-div ${selectedPic === 'egypt-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Egypt</span>
               </div>
               <div id='france-icon'
                   onClick={() => handleClick('france-icon')}
                   className={`icon-div ${selectedPic === 'france-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>France</span>
               </div>
               <div id='germany-icon'
                   onClick={() => handleClick('germany-icon')}
                   className={`icon-div ${selectedPic === 'germany-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Germany</span>
               </div>
               <div id='india-icon'
                   onClick={() => handleClick('india-icon')}
                   className={`icon-div ${selectedPic === 'india-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>India</span>
               </div>
               <div id='italy-icon'
                   onClick={() => handleClick('italy-icon')}
                   className={`icon-div ${selectedPic === 'italy-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Italy</span>
               </div>
               <div id='japan-icon'
                   onClick={() => handleClick('japan-icon')}
                   className={`icon-div ${selectedPic === 'japan-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Japan</span>
               </div>
               <div id='mexico-icon'
                   onClick={() => handleClick('mexico-icon')}
                   className={`icon-div ${selectedPic === 'mexico-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Mexico</span>
               </div>
               <div id='nepal-icon'
                   onClick={() => handleClick('nepal-icon')}
                   className={`icon-div ${selectedPic === 'nepal-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Nepal</span>
               </div>
               <div id='netherlands-icon'
                   onClick={() => handleClick('netherlands-icon')}
                   className={`icon-div ${selectedPic === 'netherlands-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Netherlands</span>
               </div>
               <div id='philippines-icon'
                   onClick={() => handleClick('philippines-icon')}
                   className={`icon-div ${selectedPic === 'philippines-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Philippines</span>
               </div>
               <div id='russia-icon'
                   onClick={() => handleClick('russia-icon')}
                   className={`icon-div ${selectedPic === 'russia-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Russia</span>
               </div>
               <div id='saudi-arabia-icon'
                   onClick={() => handleClick('saudi-arabia-icon')}
                   className={`icon-div ${selectedPic === 'saudi-arabia-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Saudi Arabia</span>
               </div>
               <div id='singapore-icon'
                   onClick={() => handleClick('singapore-icon')}
                   className={`icon-div ${selectedPic === 'singapore-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Singapore</span>
               </div>
               <div id='south-africa-icon'
                   onClick={() => handleClick('south-africa-icon')}
                   className={`icon-div ${selectedPic === 'south-africa-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>South Africa</span>
               </div>
               <div id='south-korea-icon'
                   onClick={() => handleClick('south-korea-icon')}
                   className={`icon-div ${selectedPic === 'south-korea-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>South Korea</span>
               </div>
               <div id='spain-icon'
                   onClick={() => handleClick('spain-icon')}
                   className={`icon-div ${selectedPic === 'spain-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Spain</span>
               </div>
               <div id='sweden-icon'
                   onClick={() => handleClick('sweden-icon')}
                   className={`icon-div ${selectedPic === 'sweden-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Sweden</span>
               </div>
               <div id='thailand-icon'
                   onClick={() => handleClick('thailand-icon')}
                   className={`icon-div ${selectedPic === 'thailand-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Thailand</span>
               </div>
               <div id='turkey-icon'
                   onClick={() => handleClick('turkey-icon')}
                   className={`icon-div ${selectedPic === 'turkey-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Turkey</span>
               </div>
               <div id='ukraine-icon'
                   onClick={() => handleClick('ukraine-icon')}
                   className={`icon-div ${selectedPic === 'ukraine-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>Ukraine</span>
               </div>
               <div id='united-kingdom-icon'
                   onClick={() => handleClick('united-kingdom-icon')}
                   className={`icon-div ${selectedPic === 'united-kingdom-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>UK</span>
               </div>
               <div id='united-states-icon'
                   onClick={() => handleClick('united-states-icon')}
                   className={`icon-div ${selectedPic === 'united-states-icon' ? 'active' : ''}`}>
                    <span className='hover-text'>USA</span>
               </div>
            </div>
        </div>
        
    </div>
  )
}

export default PictureSwitcher