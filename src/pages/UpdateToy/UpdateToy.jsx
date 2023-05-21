import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateToy = () => {

    const {user} = useContext(AuthContext)
    const toy = useLoaderData()
    const navigate = useNavigate()

    const {_id, img, price, category, stock, name, seler, rating, ratingCount, shipping, description } = toy

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const img = form.photo.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const seler = form.seler.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const ratingCount = form.ratingCount.value;
        const shipping = form.shipping.value;
        const description = form.details.value;

        const newToy = {
            name,
            category,
            img,
            stock,
            price,
            seler,
            email,
            rating,
            ratingCount,
            shipping,
            description
        }
        console.log(newToy)

        //send to server
        fetch(`https://bhroom-toy-shop-server-robbani572.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount> 0){
                    form.reset()
                    Swal.fire({
                        title: 'Update Successful!',
                        text: 'Toy updated successfuly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                navigate('/mytoys')
                }
            })
    }

    return (
        <div className='mt-24 mb-24 bg-[#F3F3F3] max-w-7xl container mx-auto'>
            <h1 className='text-center text-4xl font-bold pt-12 text-[#1C0E0B]'>Update Details: {name}</h1>
            <form onSubmit={handleUpdateToy}>
                <div className="p-8 md:p-20">
                    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className="form-control md:col-span-2">
                            <input type="text" name='name' defaultValue={name} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='category' defaultValue={category} placeholder="Subcategory" className="input input-bordered" readOnly required />
                        </div>
                        <div className="form-control col">
                            <input type="number" name='stock' defaultValue={stock} placeholder="Available Stock" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-2">
                            <input type="text" name='photo' defaultValue={img} placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='seler' defaultValue={seler} placeholder="Seler Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Seler Email" className="input input-bordered" required readOnly/>
                        </div>
                        <div className="form-control col">
                            <input type="text" name='rating' defaultValue={rating} placeholder="Product Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="number" name='ratingCount' defaultValue={ratingCount} placeholder="Total Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='shipping' defaultValue={shipping} placeholder="Shipping" className="input input-bordered" required />
                        </div>
                        <div className="form-control col md:col-span-3">
                            <textarea className='w-full py-2 px-2 rounded border' name="details" defaultValue={description} id="" cols="30" rows="10" placeholder='Description'></textarea>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <button className="btn btn-block bg-[#1C0E0B] border-0 bottom-0">Update Toy</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;