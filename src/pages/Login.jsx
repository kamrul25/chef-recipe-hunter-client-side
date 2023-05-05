import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const {user, createUserByGoogle, createUserByGitHub, signIn } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  const handleEmailAndPassWord = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    setError('');
        setSuccess('');
    // password validation
    if (
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/.test(password)
    ) {
      setError(
        "Please add at least one uppercase, one lowercase, one numeric character, one special and 6 characters."
      );
      return;
    }
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        navigate(from, {replace: true})
        setSuccess('User login successful.');
        setError('');
        toast.success("Successfully login by email and password");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Something was wrong ty it again!", error.message);
      });
  };

  const handleGoogle = () => {
    setError('');
        setSuccess('');
    createUserByGoogle()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, {replace: true})
        updateProfileInfo(loggedUser);
        setSuccess('User login successful.');
        toast.success("Successfully login by google!");
      })
      .catch(error => {
        setError(error.message);
        toast.error("Something was wrong .Try it again! ", error.message)
      });
  };

  const handleGithub = () => {
    setError('');
        setSuccess('');
    createUserByGitHub()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, {replace: true})
        updateProfileInfo(loggedUser);
        setSuccess('User login successful.');
        toast.success("Successfully login by github!");
      })
      .catch(error => {
        setError(error.message);
        toast.error("Something was wrong .Try it again!" ,error.message)
      });
  };

  const updateProfileInfo = loggedUser => {
    updateProfile(loggedUser, {
      displayName: { displayName },
      photoURL: { photoURL },
    })
      .then(() => {
        toast.success("Successfully update profile");
      })
      .catch((error) => {
        toast.error("Something was wrong .Try it again!", error.message);
      });
  };
  return (
    <form className="w-1/3 mx-auto my-40" onSubmit={handleEmailAndPassWord}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
          <input
            type="email"
            name="email"
            required
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control ">
        <label className="label">
          <span className="label-text">Your Password</span>
        </label>
<div >
<label className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="password"
            className="input input-bordered"
          />
            </label>
          <button
            className="btn btn-ghost btn-xs mt-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <p>Hidden</p> : <p>Show Password</p>}
          </button>
</div>
      </div>
      <div className="  mt-5 ">
        <button className="btn btn-info">
          <input
            type="submit"
            value="Login"
            className="px-16 text-white text-xl "
          />
        </button>
      </div>
      <h2 className="text-xl w-1/2 mx-auto mt-2 -mb-3">Or</h2>
      <div className="mt-2">
        <button className="btn btn-ghost " onClick={handleGoogle}>
          <FaGoogle className="mr-1"></FaGoogle> continue with google
        </button>
      </div>
      <div className="mt-2">
        <button className="btn btn-ghost" onClick={handleGithub}>
          <FaGithub className="mr-1"></FaGithub> continue with github
        </button>
      </div>

      <div className="mt px-8">
        <p>
          <small>If you don't have register</small>
          <br />
          <Link to="/register" className="text-center">
            <button className="btn btn-xs btn-ghost">Please Register</button>
          </Link>
        </p>
      </div> 

      <p className='text-red-500'>{error}</p>
            <p className='text-green-400'>{success}</p>
            <Toaster />
    </form>
  );
};

export default Login;
