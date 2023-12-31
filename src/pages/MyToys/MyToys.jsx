import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const MyToys = () => {

    const { user, logOut } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const navigate = useNavigate()

    const url = `https://toy-shop1-server.vercel.app/products?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setToys(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [url, navigate, logOut])

    const handleDelete = id => {
        const procced = confirm('Do you want to delete')
        if (procced) {
            fetch(`https://toy-shop1-server.vercel.app/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
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
        <div className="">
            <div className="min-h-screen max-w-7xl container mx-auto">
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
        </div>
    );
};

export default MyToys;