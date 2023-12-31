import React, { lazy, Suspense } from 'react';
import PayDesk from '../../assets/video/desktop_pay.mp4';
import PayMobile from '../../assets/video/mobile_pay.mp4';
import Loading from '../../components/Loading';
const Video = lazy(() => import('../../components/Video2'));

const Payment = () => {
    const [isLoad, setIsLoad] = React.useState(true);

    const video = window.innerWidth <= 425 ? PayMobile : PayDesk;

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

export default Payment;
