import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HappyUsers from "../HappyUsers/HappyUsers";
import Shop from "../Shop/Shop";
import WebFeature from "../WebFeature/WebFeature";


const Home = () => {
    return (
        <div className=''>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="mt-24 mb-24 p-8">
                <WebFeature></WebFeature>
            </div>
            <div className="gallery-bg mt-32">
                <Gallery></Gallery>
            </div>
            <div className="">
                <Shop></Shop>
            </div>
            <div className=" mt-20 mb-24">
                <HappyUsers></HappyUsers>
            </div>
        </div>
    );
};

export default Home;