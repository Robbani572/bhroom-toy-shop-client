

const HappyUser = ({ user }) => {

    const { name, ratings, img, description } = user

    return (
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img} className="w-full" />
            <div className="absolute flex flex-col items-center justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 bg-text p-8">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-xl font-semibold">{description}</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <p className="btn btn-circle">❮</p>
                <p className="btn btn-circle">❯</p>
            </div>
        </div>
    );
};

export default HappyUser;