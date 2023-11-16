import React, { lazy, Suspense } from 'react';
import ConDesk from '../../assets/video/desktop_con.mp4';
import ConMobile from '../../assets/video/mobile_con.mp4';
import Loading from '../../components/Loading';
const Video = lazy(() => import('../../components/Video2'));

const Consultation = () => {
    const [isLoad, setIsLoad] = React.useState(true);

    const video = window.innerWidth <= 425 ? ConMobile : ConDesk;


    React.useEffect(() => {
        setTimeout(() => {
            setIsLoad(!isLoad);
        }, 6000);
    }, [])

    return (
        <Suspense fallback={<Loading />}>

            <div className='container'>
                <Video video={video} />
            </div>
        </Suspense>
    )
}

export default Consultation;
