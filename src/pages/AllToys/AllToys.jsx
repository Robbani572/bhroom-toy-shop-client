import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";
import { useEffect } from "react";


const AllToys = () => {

    const toys = useLoaderData()

    const handleSearch = (event) => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value;
        console.log(search)

        const url = `http://localhost:5444/products?name=${search}`

        
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="overflow-x-auto w-full max-w-7xl container mx-auto my-24">
            <form onSubmit={handleSearch} className="w-full grid grid-cols-4 items-center gap-8">
                <div className="form-control col-span-3">
                    <input type="text" name='search' placeholder="Search Toy" className="input input-bordered" required />
                </div>
                <div className="form-control col">
                    <button className="btn bg-[#1C0E0B]">Search</button>
                </div>
            </form>
            <table className="table w-full mt-10">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Name</th>
                        <th>Subcategory</th>
                        <th>seler name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <ToysTable
                            key={toy._id}
                            toy={toy}
                        ></ToysTable>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;