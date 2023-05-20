import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";


const AllToys = () => {

    const toys = useLoaderData()

    return (
        <>
            <div className="overflow-x-auto w-full max-w-7xl container mx-auto">
                <table className="table w-full">
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
        </>
    );
};

export default AllToys;