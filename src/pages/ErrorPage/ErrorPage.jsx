import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center bg-[url('error.jpg')] min-h-screen bg-no-repeat bg-fixed bg-cover">
            <Link className='text-xl font-bold text-primary mt-8'><button><div className='flex justify-center items-center'><FaBackward className='mr-4'></FaBackward> Go Back</div></button></Link>
        </div>
    );
};

export default ErrorPage;