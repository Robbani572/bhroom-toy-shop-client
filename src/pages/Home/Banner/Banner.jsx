import LazyLoad from 'react-lazy-load';
import banner1 from '../../../assets/images/b3.jpg'
import banner2 from '../../../assets/images/b2.jpg'
import banner3 from '../../../assets/images/b1.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full  mt-20 mb-20 container max-w-7xl mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <LazyLoad>
                    <img src={banner1} className="w-full" />
                </LazyLoad>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <LazyLoad>
                    <img src={banner2} className="w-full" />
                </LazyLoad>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <LazyLoad>
                    <img src={banner3} className="w-full" />
                </LazyLoad>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;