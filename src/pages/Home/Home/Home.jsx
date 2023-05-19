import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Shop from "../Shop/Shop";


const Home = () => {
    return (
        <div className=''>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="">
                <Gallery></Gallery>
            </div>
            <div className="">
                <Shop></Shop>
            </div>
        </div>
    );
};

export default Home;