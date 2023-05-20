import { useContext } from "react";
import { addToLocalDb } from "../../utilitis/localdb";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";


const AddToys = () => {

    const {user} = useContext(AuthContext)

    const handleAddToy = event => {
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
        fetch("http://localhost:5444/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const id = data.insertedId;
                addToLocalDb(id)
            })
    }

    return (
        <div className='mt-24 mb-24 bg-[#F3F3F3]'>
            <h1 className='text-center text-4xl font-bold pt-12 text-[#1C0E0B]'>Insert Toy Details</h1>
            <form onSubmit={handleAddToy}>
                <div className="p-8 md:p-20">
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-12'>
                        <div className="form-control col">
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='category' placeholder="Subcategory" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="number" name='stock' placeholder="Available Stock" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='seler' placeholder="Seler Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="email" name='email' placeholder="Seler Email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='rating' placeholder="Product Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="number" name='ratingCount' placeholder="Total Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='shipping' placeholder="Shipping" className="input input-bordered" required />
                        </div>
                        <div className="form-control col md:col-span-2">
                            <textarea className='w-full py-2 px-2 rounded border ' name="details" id="" cols="30" rows="10" placeholder='Description'></textarea>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <button className="btn btn-block bg-[#1C0E0B] border-0 bottom-0">Add Toy</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToys;