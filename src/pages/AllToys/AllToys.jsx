import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {

    useTitle('Bhroom | All Toys')

    const toys = useLoaderData()
    // const [currentPage, setCurrentPage] = useState(1)
    // const [toyData, setToyData] = useState([])

    // const totalToys = toys.length;
    // const itemsPerPage = 10;
    // const totalPages = Math.ceil(totalToys / itemsPerPage)

    // const pageNumbers = [];
    // for (let i = 1; i <= totalPages; i++) {
    //     pageNumbers.push(i)
    // }
    // console.log(totalToys)

    // const url = `https://toy-shop1-server.vercel.app/products?page=${currentPage}&limit=${itemsPerPage}`

    // useEffect(() => {
    //     const fetchData = async() => {
    //         const response = await fetch (url)
    //         const data = await response.json()
    //         setToyData(data)
    //         console.log(data)
    //     }
    //     fetchData()
    // },[currentPage, itemsPerPage, url])

    const handleSearch = (event) => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value;
        console.log(search)

        const url = `https://toy-shop1-server.vercel.app/products?name=${search}`


        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="overflow-x-auto w-full max-w-7xl container mx-auto my-24">
            <div>
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
            {/* <div className="mt-20">
                <div className="btn-group flex justify-center">
                    {
                        pageNumbers.map(number => <button 
                            key={number} 
                            onClick={() => setCurrentPage(number)} 
                            className={currentPage === number? 'btn border-none bg-[#f76403]' :
                            'btn bg-[#1C0E0B]'
                        }
                        >{number}</button>)
                    }
                </div>
            </div> */}
        </div>
    );
};

export default AllToys;