import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ColorSwitcher from './ColorSwitcher'
import PictureSwitcher from './PictureSwitcher'

function Settings({changeColor}) {
  const [selectedPic, setPicture] = useState('')
    
    useEffect(()=> {
    const currentPicture = localStorage.getItem('profile-picture');
    if (currentPicture) {
      setPicture(currentPicture);
    }
  }, [selectedPic])

  //updates User Profile Pic
  const updatePic = (newProfilePic) => {
    setPicture(newProfilePic)
  }

  const logout = () => {
    localStorage.removeItem('userInfo');
  };

  
  return (
    
  <div className='user-page-container'>
    <div className='side-bar-nav'>
        <div className={`user-icon ${selectedPic}`}>
            {/* <img src={user_default} alt="DEFAULT_USER_IMG" className='user-default' /> */}
        </div>
        <div className='side-bar-nav-options'>
            <Link to="/userpage" className='settings-text'>Profile</Link>
            <Link to="/settings" className='settings-text'>Settings</Link>
            <Link to="/booklist" className='settings-text'>Book List</Link>
            <Link to="/" >
                <button className='settings-text' onClickCapture={logout}>Logout </button>
            </Link>
            {/* Logout does not currently log out the user, simply links back to sign in page*/}
        </div>
    </div>
    <div className='settings'>
        <ColorSwitcher changeColor={changeColor}/>
        <PictureSwitcher changePic={updatePic}/>
    </div>
</div>
    
  )
}

export default Settings