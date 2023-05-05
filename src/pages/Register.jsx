import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setImage } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleCreateUser = event => {
    setImage(null);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURl = form.photoURl.value;
    setImage(photoURl);
    const email = form.email.value;
    const password = form.password.value;

    // password validation
    setError("");
    setSuccess("");
    if (
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/.test(password)
    ) {
      setError(
        "Please add at least one uppercase, one lowercase, one numeric character, one special and 6 characters."
      );
      return;
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
        updateProfileInfo(loggedUser, name, photoURl);
        setSuccess("User login successful.");
        setError("");
      })
      .catch(error => {
        setError(error.message);
        toast.error(`${error.message}! Please Try again.`);
      });
    form.reset();
  };

  const updateProfileInfo = (loggedUser, name, photoURl) => {
    updateProfile(loggedUser, {
      displayName: { name },
      photoURL: { photoURl },
    }).then(() => {
      toast.success("Successfully Register!");
    });
  };

  return (
    <form className="w-1/4 mx-auto my-40" onSubmit={handleCreateUser}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            required
            placeholder="Kamrul Hasan"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Photo</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="photoURl"
            required
            placeholder="https://image.png"
            className="input input-bordered"
          />
        </label>
      </div>
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
        <div>
          <label className="input-group ">
            <input
              type= "password"
              name="password"
              required
              placeholder="password"
              className="input input-bordered"
            />
          </label>
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

      <div className="mt px-8">
        <p>
          <small>If you already have been register</small>
          <br />
          <Link to="/login" className="text-center">
            <button className="btn btn-xs btn-ghost ml-9">Please Login</button>
          </Link>
        </p>
      </div>
      <p className='text-red-500'>{error}</p>
            <p className='text-green-400'>{success}</p>
            <Toaster />
      <Toaster />
    </form>
  );
};

export default Register;
