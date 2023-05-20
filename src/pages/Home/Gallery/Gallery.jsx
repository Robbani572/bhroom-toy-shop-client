import LazyLoad from 'react-lazy-load'
import img1 from '../../../assets/images/1.png'
import img2 from '../../../assets/images/2.jpg'
import img3 from '../../../assets/images/3.jpg'
import img4 from '../../../assets/images/4.jpg'
import img5 from '../../../assets/images/5.jpg'
import img6 from '../../../assets/images/6.jpg'

const Gallery = () => {
    return (
        <div className='min-h-screen max-w-7xl container mx-auto'>
            <div className="text-center space-y-7 mb-8">
                <h2 className="text-5xl font-bold text-[#1C0E0B]">Gallery</h2>
                <h4 className="text-2xl font-semibold">Some featured products</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8">
                <div className="col">
                    <LazyLoad>
                        <img src={img1} alt="" />
                    </LazyLoad>
                </div>
                <div className="col">
                    <LazyLoad>
                        <img src={img2} alt="" />
                    </LazyLoad>
                </div>
                <div className="col">
                    <LazyLoad>
                        <img src={img3} alt="" />
                    </LazyLoad>
                </div>
                <div className="col">
                    <LazyLoad>
                        <img src={img4} alt="" />
                    </LazyLoad>
                </div>
                <div className="col">
                    <LazyLoad>
                        <img src={img5} alt="" />
                    </LazyLoad>
                </div>
                <div className="col">
                    <LazyLoad>
                        <img src={img6} alt="" />
                    </LazyLoad>
                </div>

            </div>
        </div>
    );
};

export default Gallery;