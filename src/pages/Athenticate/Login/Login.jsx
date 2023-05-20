import { Link } from 'react-router-dom';
import login from '../../../assets/images/Authentication/login.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';

const Login = () => {

    const {singInUser, loading} = useContext(AuthContext)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const handleLogIn = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        singInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            form.reset()
            setSuccess('Logged in successfuly')
            console.log(loggedUser)
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
        
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-8 lg:flex-row">
                <div className="md:w-full text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-100 md:w-full">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login To Bhroom!!</h1>
                        <form onSubmit={handleLogIn}>
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
                            <div className="form-control mt-6">
                                <button className="btn bg-[#1C0E0B]">Login</button>
                                <p className='text-center mt-4'>Do not have account? <Link className='text-orange-500 font-semibold' to="/register">Register</Link></p>
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

export default Login;