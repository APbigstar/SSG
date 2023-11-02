import React from 'react';
import PropTypes from 'prop-types'
import ServiceVideo from '../../assets/video/project_management.mp4';
import Video from '../../components/Video';
const Service = ({ isMenuOpen }) => {
    console.log(isMenuOpen);
    return (
        <div className='container'>
            <Video isMenuOpen={isMenuOpen} video={ServiceVideo}/>
        </div>
    )
}

export default Service;

Service.propTypes = {
    isMenuOpen:PropTypes.bool.isRequired,
  }