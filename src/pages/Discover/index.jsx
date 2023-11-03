import React from 'react';
import PropTypes from 'prop-types'
import ServiceVideo from '../../assets/video/project_management.mp4';
import Video from '../../components/Video';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';


const Service = () => {
  const [isLoad, setIsLoad] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoad(false);
        }, 2000);
    })

    if (isLoad) {
        return <Loading />
    }
    return (
        <div className='container'>
            <Layout />
            <Video video={ServiceVideo} />
        </div>
    )
}

export default Service;

Service.propTypes = {
    video: PropTypes.any.isRequired,
}