import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/userActions";

const Login = ({ location, history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    console.log('User Login Payload', userLogin)

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        //Dispatch Login
        dispatch(login(email, password))
    };

    return (
        <div className="login">
            <div className="login_description">
                <div className="login_logo">
                    <Link to="/">
                        <img src="/images/logos-03.svg" alt="logo" />
                    </Link>
                </div>
                <div className="login_header">
                    <h1>Sell your art online for free and earn without hassle.</h1>
                </div>
                <div className="login_body">
                    <p>
                        Printeebo is an online marketplace where you can sell your art on
                        printable media without direct involvement in the production.
                    </p>
                </div>
                <div className="login_icon"></div>
            </div>
            <div className="login_form">
                <div className="form_header">
                    <h1>Log in to Printeebo</h1>
                    <p>
                        Don't have an account? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Sign up free</Link>
                    </p>
                </div>
                <div className="form_socials">
                    <div className="google">
                        <button>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.54,9.82H12.24v4.64H18.7a5.69,5.69,0,0,1-.83,2.06,5.43,5.43,0,0,1-1.57,1.56h0a7.22,7.22,0,0,1-10.77-3.8h0a7,7,0,0,1,0-4.56h0a7.14,7.14,0,0,1,6.71-5,6.5,6.5,0,0,1,4.59,1.8l3.44-3.44a11.52,11.52,0,0,0-8-3.13A12,12,0,0,0,1.52,6.61h0a12,12,0,0,0,0,10.78h0A12,12,0,0,0,12.24,24a11.43,11.43,0,0,0,7.94-2.91h0a11.69,11.69,0,0,0,3.58-8.82h0A13.45,13.45,0,0,0,23.54,9.82Z" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>

                    <div className="facebook">
                        <button>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm3.72,6.66H14.21C13,6.66,12.8,7.22,12.8,8V9.86h2.82l-.37,2.84H12.8V20H9.86V12.7H7.41V9.86H9.86V7.76A3.43,3.43,0,0,1,13.52,4a21.84,21.84,0,0,1,2.2.11Z" />
                            </svg>
                            Sign in with facebook
                        </button>
                    </div>
                </div>
                <div className="divider">
                    <hr />
                    <p>Or</p>

                    <hr />
                </div>
                <div className="form_inheret">
                    {error && <p>{error}</p>}
                    {loading && <p>Loading ......</p>}
                    <form onSubmit={submitHandler}>
                        <div className="form_control">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Log in</button>
                        <p>
                            By logging in you agree to our Terms of Service and Privacy Policy
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
