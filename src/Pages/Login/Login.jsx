import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";
import Lottie from "lottie-react";
import loginAnimation from '../../assets/login.json'
import { FaSpinner } from "react-icons/fa6";

const Login = () => {
    const { signIn, googleSignIn, loading } = useContext(AuthContext);


    const location = useLocation();
    // console.log(location);
    // const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        //clear error
        setLoginError('')


        // log in 
        signIn(email, password)
            .then(result => {
                console.log(result);

                //toast pop-up
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex pt-0.5 items-center">
                                    <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        WoW!!!
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Account loged in!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex border-l border-blue-200">
                            <Link to={`${location?.state ? location.state : '/'}`}>
                                <button
                                    onClick={() =>
                                        toast.dismiss(t.id)
                                    }
                                    className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>

                    </div>
                ))

            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message)

            })

    }

    //login by google
    const handleGoogle = () => {
        googleSignIn()
            .then(re => {
                console.log(re);

                //toast pop-up
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex pt-0.5 items-center">
                                    <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        WoW!!!
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Account loged in!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex border-l border-blue-200">
                            <Link to={`${location?.state ? location.state : '/'}`}>
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>

                    </div>
                ))
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message)
            })
    }


    return (
        <div data-aos="zoom-in" className=" py-10">


            {/* <div className="w-full max-w-sm p-4 drop-shadow-2xl  bg-white border border-gray-200 border-none sm:p-6 md:p-8 dark:bg-yellow-900 dark:border-gray-700 mx-auto">
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Login to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />

                        <p className="text-center  text-red-400 underline pt-1">{loginError}</p>
                    </div>
                    <div className='border-b mx-auto'>
                        <h3 className=' text-white text-center'>Or,</h3>
                        <div className='flex justify-center'>
                            <button onClick={handleGoogle} className="btn btn-md mt-5 btn-outline btn-warning mb-5">
                                <span className='text-2xl'><AiFillGoogleCircle></AiFillGoogleCircle></span> Login with gmail</button>
                        </div>
                    </div>

                    <button type="submit" className="w-full text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-500 ">Login your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to={'/register'} href="#" className=" text-yellow-500 text-xl">Create account</Link>
                    </div>
                </form>
            </div> */}

            <div className="hero -mt-20 min-h-[700px] overflow-x-hidden" style={{ backgroundImage: 'url(https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-6xl flex items-center">

                        <div className="hidden md:block flex-1">
                            <Lottie animationData={loginAnimation} className=""></Lottie>
                        </div>

                        <div className="w-full flex-1 max-w-xl rounded-md shadow p-5 sm:p-8 dark:bg-green-800 dark:text-gray-100" >
                            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                            <p className="text-sm text-center dark:text-gray-400 hover:scale-110 transform transition-transform duration-300">Dont have account?
                                <Link to='/register' rel="noopener noreferrer" className="focus:underline hover:underline ml-5 text-green-500 text-xl">Register here</Link>
                            </p>

                            <form onSubmit={handleLogin} action="" className="space-y-8">
                                <div className="space-y-4" >
                                    <div className="space-y-2" >
                                        <label className="block text-sm text-left">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="xyz@gmail.com" className="w-full px-3 py-2 border rounded-md  dark:text-gray-100 focus:dark:border-violet-400" />
                                    </div>
                                    <div className="space-y-2" >
                                        <div className="flex justify-between" >
                                            <label name="password" className="text-sm">Password</label>

                                        </div>
                                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  dark:text-gray-100 focus:dark:border-violet-400" />
                                    </div>
                                    <p className='text-red-500'>{loginError}</p>
                                </div>

                                <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri hover:bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p>Login with Google</p>
                                </button>


                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-green-500 dark:text-white hover:scale-105 transform transition-transform duration-300">
                                    {
                                        loading ? <FaSpinner className='mx-auto animate-spin text-xl'></FaSpinner> : 'Login'
                                    }
                                </button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;