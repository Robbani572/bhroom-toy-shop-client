import { Rating } from '@smastrom/react-rating'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';

const Cards = ({ toy }) => {

    const { _id, name, img, price, ratings } = toy;

    return (
        <div className="card w-96 bg-base-100 shadow-xl col">
            <LazyLoad>
                <figure><img src={img} alt="Shoes" /></figure>
            </LazyLoad>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{name}</h2>
                    <h4>{price}</h4>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis animi quia distinctio iusto ipsa a.</p>
                <div className="card-actions justify-between items-center">
                    <div className='flex items-center gap-2'>
                        <Rating className='w-6 h-6' value={ratings} readOnly />
                        <p className='text-xl font-bold text-orange-500'>{ratings}</p>
                    </div>
                    <Link to={`/details/${_id}`} className='text-orange-500'> <FaArrowRight></FaArrowRight> </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;