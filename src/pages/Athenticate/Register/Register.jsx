import { Link } from 'react-router-dom';
import login from '../../../assets/images/Authentication/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name, email, password, confirm)

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                form.reset()
                setSuccess('User created successfuly')
                console.log(newUser)
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })

    }

    return (
        <div className="hero min-h-screen">
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
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#1C0E0B]">Register</button>
                                <p className='text-center mt-4'>Already have account? <Link className='text-orange-500 font-semibold' to="/login">Login</Link></p>
                                <p className='text-orange-700 text-center'>{error}</p>
                                <p className='text-green-600 text-center'>{success}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;