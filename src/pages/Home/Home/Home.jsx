import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div className=''>
            <div className="max-w-7xl mx-auto">
                <Banner></Banner>
            </div>
            <div className="max-w-7xl mx-auto">
                <Gallery></Gallery>
            </div>
        </div>
    );
};

export default Home;