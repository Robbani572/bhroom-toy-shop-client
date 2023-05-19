import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Shop from "../Shop/Shop";


const Home = () => {
    return (
        <div className=''>
            <div className="max-w-7xl mx-auto">
                <Banner></Banner>
            </div>
            <div className="max-w-7xl mx-auto">
                <Gallery></Gallery>
            </div>
            <div className="max-w-7xl mx-auto">
                <Shop></Shop>
            </div>
        </div>
    );
};

export default Home;