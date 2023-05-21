import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assets/images/Authentication/login.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { FaGoogle } from 'react-icons/fa';

const Register = () => {

    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleRegisterWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            Swal.fire({
                title: 'Success!',
                text: 'Registered successfuly',
                icon: 'success',
                confirmButtonText: 'Back To Home'
            })
            navigate(from, { replace: true })

        })
    }

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name, email, password, confirm)

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                form.reset()
                setSuccess('User created successfuly')
                updateUser(displayName, photoURL)
                    .then()
                    .catch(error => {
                        console.log(error)
                    })
                Swal.fire({
                    title: 'Success!',
                    text: 'Registered successfuly',
                    icon: 'success',
                    confirmButtonText: 'Back To Home'
                })
                form.reset()
                navigate(from, { replace: true })
                console.log(newUser)
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })


    }

    return (
        <div className='min-h-screen register-bg'>
            <div className="hero max-w-7xl container mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="md:w-full text-center lg:text-left">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-full">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Register To Explore Bhroom!!</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Url(optional)" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#1C0E0B]">Register</button>
                                    <p className='text-center mt-4'>Already have account? <Link className='text-orange-500 font-semibold' to="/login">Login</Link></p>
                                    <p className='text-orange-700 text-center'>{error}</p>
                                    <p className='text-green-600 text-center'>{success}</p>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className='flex justify-center'>
                                <button onClick={handleRegisterWithGoogle} className="btn btn-circle">
                                    <FaGoogle></FaGoogle>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;