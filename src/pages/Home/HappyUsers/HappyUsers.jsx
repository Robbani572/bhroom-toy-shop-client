import { useEffect, useState } from "react";
import HappyUser from "./HappyUser";


const HappyUsers = () => {

    const [users, setUsers] = useState()
    console.log(users)

    useEffect(() => {
        fetch('https://toy-shop1-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="max-w-7xl container mx-auto p-8">

            <div className="flex-col md:flex-row items-center justify-between">
            <div className="text-center space-y-7 mb-8">
                <h2 className="text-5xl font-bold text-[#1C0E0B]">Our Happy Client</h2>
                <h4 className="text-2xl font-semibold">See what they say!!</h4>
            </div>

            <div className="carousel w-full md:w-1/2">

                {
                    users?.map(user => <HappyUser
                        key={user._id}
                        user={user}
                    ></HappyUser>)
                }
                {/* {
                users.map(user => <HappyUser key={user._id} user={user}></HappyUser>)
            } */}
                {/* {
                users.map(user => <HappyUser key={user._id} user={user}></HappyUser>)
            } */}

            </div>
            </div>
        </div>
    );
};

export default HappyUsers;