import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types'
import ServiceVideo from '../../assets/video/project_management.mp4';
const Video = lazy(() => import('../../components/Video'));
const Layout = lazy(() => import('../../components/Layout'));
import Loading from '../../components/Loading';


const Service = () => {
    const [isLoad, setIsLoad] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoad(!isLoad);
        }, 6000);
    }, [])

    return (
        <Suspense fallback={<Loading />}>
            <div className='container'>
                <Layout />
                <Video video={ServiceVideo} />
            </div>
        </Suspense>
    )
}

export default Service;

Service.propTypes = {
    video: PropTypes.any.isRequired,
}