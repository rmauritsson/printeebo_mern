import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/userActions";

const Register = ({ location, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState('')


    const [isAdmin, setAdmin] = useState(false);
    const [isBuyer, setBuyer] = useState(true);
    const [isCreator, setCreator] = useState(false);

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        //check confirm password before dispatch
        dispatch(register(name, email, password, phone, isBuyer, isCreator, isAdmin));
    };

    return (
        <div className="register">
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
                    <h1>Join Printeebo</h1>
                    <p>
                        Already have an account?{" "}
                        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                            Login
                        </Link>
                    </p>
                </div>

                <div className="divider">

                </div>
                <div className="form_inheret">
                    {error && <p>{message}</p>}
                    <form onSubmit={submitHandler}>
                        <div className="form_control">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                        <div className="form_control">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Re-Enter your Password to Confirm"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="form_control">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form_control">
                            <input
                                type="hidden"
                                name="isAdmin"
                                id="isAdmin"
                                value={isAdmin}
                            />
                            <input
                                type="hidden"
                                name="isBuyer"
                                id="isBuyer"
                                value={isBuyer}
                            />
                            <input
                                type="hidden"
                                name="isCreator"
                                id="isCreator"
                                value={isCreator}
                            />
                        </div>
                        <button type="submit">Create Account</button>
                        <p>
                            By clicking on Create Account, you agree  to
                            Printeebo’s Terms of Service and Privacy Policy
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register