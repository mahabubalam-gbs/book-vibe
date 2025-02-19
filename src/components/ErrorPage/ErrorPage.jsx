import { Link, useRouteError } from 'react-router-dom';
import background from '../../assets/images/errorpage.jpg'

const ErrorPage = () => {
    const error = useRouteError();


    return (
        <div className='w-full min-h-dvh flex flex-col justify-center items-center'>
            <h2 className='text-red-500 text-5xl font-bold mb-8'>Oops!</h2>
            <p className='text-center'>
                <i className='text-3xl text-gray-400 text-center'>
                    {error.statusText || error.message}
                </i>
                {
                    error.status === 404 && <div>
                        <i className='text-3xl text-gray-300'>{error.status}</i>

                    </div>
                }
            </p>
            <p className='mt-12 mb-6'>Please go to Home Page</p>
            <Link to={'/'}><button className="btn btn-success  text-md btn font-bold rounded-2xl text-white">Home</button></Link>
        </div>
    );
};

export default ErrorPage;