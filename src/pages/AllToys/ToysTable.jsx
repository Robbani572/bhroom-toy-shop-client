import { Link } from "react-router-dom";


const ToysTable = ({toy}) => {

    const {_id, img, price, category, stock, seller, name } = toy

    return (
        <tr>
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
                {seller}
            </td>
            <td>
                Price: ${price}
            </td>
            <td>
                In Stock: {stock}
            </td>
            <th>
                <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default ToysTable;