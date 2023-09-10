import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col lg:flex-row">
                <img className='w-3/4' src={img} alt="" />

                <div className="card bg-base-300 w-1/2">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className='text-3xl font-semibold text-center'>Register now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
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
                            <input className="btn btn-primary" type="submit" value="sign up" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>have a allready accound <Link to='/login' className='text-orange-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;