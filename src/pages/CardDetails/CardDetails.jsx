import { Rating } from '@smastrom/react-rating'
import { FaCheck, FaCross } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const CardDetails = () => {

    const toy = useLoaderData()

    const { img, title, price, ratings, shipping, ratingsCount, stock, seller } = toy

    return (
        <div className="max-w-7xl mx-auto mt-20 p-4 min-h-screen">
            <div className="grid md:grid-cols-12 lg:grid-cols-12 gap-12">
                <div className="md:col-span-8 lg:col-span-8">
                    <div className="card card-compact bg-base-100">
                        <figure><img className="h-[500px] w-full" src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="title text-4xl font-semibold text-[#1C0E0B]">{toy.name}</h2>
                            <div className="mt-8 flex flex-col gap-4">
                                <h4 className="text-green-600 font-semibold flex items-center gap-2 text-xl">{stock > 0 ? <FaCheck></FaCheck> : <FaCross></FaCross>} In Stock: {stock}</h4>
                                <h4 className="text-orange-600 font-semibold text-xl">Price: ${price}</h4>
                                <h4 className="text-orange-600 font-semibold text-xl">Delivery: ${shipping}</h4>

                            </div>
                            <div className="flex justify-between items-center mt-8">
                                <h3 className="text-center text-2xl font-semibold">Sellar Information:</h3>
                                <h3 className="text-center text-xl font-semibold">Name: {seller}</h3>
                                <h3 className="text-center text-xl font-semibold">Email: info@toy.com</h3>
                            </div>
                            <div className="card-actions justify-between mt-8 items-center">
                                <div className='flex items-center gap-2'>
                                    <Rating className='w-6 h-6' value={ratings} readOnly />
                                    <p className='text-xl font-bold text-orange-500 flex'>{ratings} <span className='text-[#1C0E0B]'>({ratingsCount})</span> </p>
                                </div>
                                <button className="btn bg-[#1C0E0B]">Add To List</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 h-full lg:col-span-4 p-4 bg-base-200 w-full">
                    <form>
                        <div className="p-4">
                            <div className="flex-col">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold">Give Us feedback</h1>
                                </div>
                                <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control col">
                                        <input type="text" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control col">
                                        <input type="email" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control col md:col-span-2">
                                        <textarea className='w-full py-2 px-2 rounded border ' name="message" id="" cols="30" rows="10" placeholder='Messege'></textarea>
                                    </div>
                                    <div className='mt-4 col md:col-span-2'>
                                        <button className="btn btn-block bg-[#1C0E0B] border-0 bottom-0">Order Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;