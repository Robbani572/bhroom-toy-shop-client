import LazyLoad from 'react-lazy-load';
import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="carousel w-full  mt-20 mb-20">
            <div id="slide1" className="carousel-item relative w-full">
                <LazyLoad>
                    <img src={banner} className="w-full" />
                </LazyLoad>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <LazyLoad>
                    <img src={banner} className="w-full" />
                </LazyLoad>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <LazyLoad>
                    <img src={banner} className="w-full" />
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