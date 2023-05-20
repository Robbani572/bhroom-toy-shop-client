import { Rating } from '@smastrom/react-rating'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';

const Cards = ({ toy }) => {

    const { _id, name, img, price, rating, description } = toy;

    return (
        <div className="card w-96 bg-base-100 shadow-xl col">
            <LazyLoad>
                <figure><img src={img} alt="Shoes" /></figure>
            </LazyLoad>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{name}</h2>
                    <h4 className='text-xl font-semibold'>Price: ${price}</h4>
                </div>
                <p className='text-gray-700 font-semibold'>{description}</p>
                <div className="card-actions justify-between items-center">
                    <div className='flex items-center gap-2'>
                        <Rating className='w-6 h-6' value={rating} readOnly />
                        <p className='text-xl font-bold text-orange-500'>{rating}</p>
                    </div>
                    <Link to={`/details/${_id}`} className='text-orange-500'> <FaArrowRight></FaArrowRight> </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;