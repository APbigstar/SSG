import React, { lazy, Suspense } from 'react';
import ServiceVideo from '../../assets/video/financial_services.mp4';
import Loading from '../../components/Loading';
const Video = lazy(() => import('../../components/Video'));
const Layout = lazy(() => import('../../components/Layout'));

const Service = () => {
    const [isLoad, setIsLoad] = React.useState(true);

    React.useEffect(() => {
        setIsLoad(!isLoad);
    }, [])

    return (
        <Suspense fallback={<Loading/>}>

            <div className='container'>
                <Layout />
                <Video video={ServiceVideo} />
            </div>
        </Suspense>
    )
}

export default Service;
