import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signInUser ,signInWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || '/'
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const newuser = result.user;
                console.log(newuser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col lg:flex-row">
                <img className='w-3/4' src={img} alt="" />

                <div className="card bg-base-300 w-1/2">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className='text-3xl font-semibold text-center'>Login</h2>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login here" />
                        </div>
                    </form>
                    <p className='my-4'>have a new accound <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
                    <button className='btn ' onClick={handleGoogleSignIn}>google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;