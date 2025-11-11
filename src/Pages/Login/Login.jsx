
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const {googleSignIn, createUser, signInUser} = useContext(AuthContext)
  const handelGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    });
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(result => console.log(result.user))
      .catch(error => console.error(error));
};
const handleSignInUser = (email, password) =>{
  signInUser(email, password)
  .then(result => console.log(result))
  .catch(error =>console.log(error))
}
    return (
         <div className='flex justify-center items-center min-h-screen bg-base-200 px-4 py-8'>
            <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">
              Welcome Back
            </h2>

            <form onSubmit={handleCreateUser}>
              <fieldset className="space-y-3">
                <div>
                  <label className="label text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="label text-sm font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex justify-between items-center text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox-lg rounded-box checkbox-primary"
                    />
                    <span>Remember me</span>
                  </label>

                  <Link
                    to="/account/forgot-password"
                    className="link link-hover text-primary">
                    Forgot password?
                  </Link>
                </div>

                <button onClick={handleSignInUser}
                  type="submit"
                  className="gradient-btn w-full btn-sm mt-2">
                  Login
                </button>
              </fieldset>
            </form>

            <div className="divider text-xs my-4">OR</div>

            <button
              onClick={handelGoogleSignIn}
              className="btn bg-white text-black border border-gray-300 w-full gap-2 hover:bg-gray-50 text-sm">
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            {/* GitHub */}
            <button className="btn bg-black text-white border-black">
              <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
              Login with GitHub
            </button>

            <p className="text-center text-xs mt-3">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="link link-hover text-primary">
                Register here
              </Link>
            </p>

            <p className="text-center text-xs mt-2">
              <Link to="/" className="link link-hover text-secondary">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
         </div>
    );
};

export default Login;