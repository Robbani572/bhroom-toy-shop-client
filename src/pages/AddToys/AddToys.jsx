import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";


const AddToys = () => {

    const { user } = useContext(AuthContext)
    
    useTitle('Bhroom | Add Toys')


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
        fetch("https://toy-shop1-server.vercel.app/products", {
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
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfuly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }

    return (
        <div className='mt-24 mb-24 bg-[#F3F3F3] max-w-7xl container mx-auto'>
            <h1 className='text-center text-4xl font-bold pt-12 text-[#1C0E0B]'>Insert Toy Details</h1>
            <form onSubmit={handleAddToy}>
                <div className="p-8 md:p-20">
                    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className="form-control md:col-span-2">
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            {/* <input type="text" list="data" name='category' placeholder="Subcategory" className="input input-bordered" required />
                            <datalist id="data">
                                {
                                    categorys.map(cat => <option key={cat}>{cat}</option>)
                                }
                            </datalist> */}
                            {/* <div className="dropdown">
                                <label tabIndex={0} className="btn w-full">Click</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div> */}
                            {/* <input type="text" name='category' placeholder="Subcategory" className="input input-bordered" required /> */}
                            <select className="input input-bordered" name="category" id="data">
                                <option value="Sports Car">Sports Car</option>
                                <option value="Mini Fire Truck">Mini Fire Truck</option>
                                <option value="Truck">Truck</option>
                                <option value="Regular Car">Regular Car</option>
                                <option value="Mini Police Car">Mini Police Car</option>
                            </select>
                        </div>
                        <div className="form-control col">
                            <input type="number" name='stock' placeholder="Available Stock" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-2">
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='seler' placeholder="Seler Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="email" name='email' placeholder="Seler Email" defaultValue={user?.email} className="input input-bordered" required readOnly />
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
                        <div className="form-control col md:col-span-3">
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