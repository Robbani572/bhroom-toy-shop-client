import { Link } from "react-router-dom";


const MyToysTable = ({toy, handleDelete}) => {

    const {_id, img, price, category, stock, seller, name } = toy

    

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
            <div className="avatar">
                    <div className="w-14 h-14 rounded">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {category}
            </td>
            <td>
                ${price}
            </td>
            <td>
                {stock}
            </td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
        </tr>
    );
};

export default MyToysTable;