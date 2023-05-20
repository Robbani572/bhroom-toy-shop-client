import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { data } from "autoprefixer";
import MyToysTable from "./MyToysTable";
import Swal from 'sweetalert2'


const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    const url = `http://localhost:5444/products?email=${user?.email}`;
    console.log(user.email)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleDelete = id => {
        const procced = confirm('Are you sure?')
        if(procced){
            fetch(`http://localhost:5444/products/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Delete Successful!',
                        text: 'You have deleted one item',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                    const remaining = toys.filter(booking => booking._id !== id)
                    setToys(remaining)
                }
            })
        }
    }

    return (
        <div className="min-h-screen max-w-7xl container mx-auto">
            <h3>My toys: {toys.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToysTable
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                            ></MyToysTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;