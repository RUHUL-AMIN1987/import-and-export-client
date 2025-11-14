import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";


const Register = () => {
  const {googleSignIn, createUser}  = useContext(AuthContext)
  const handelGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      console.log(result.user)
      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      }
       
    //Create user data in database

    fetch('https://smart-deals-app.vercel.app/users' ,{
       method: "POST",
       headers: {
        'content-type':'application/json'
       },
       body: JSON.stringify(newUser)
    })
     
      .then(res => res.json())
      .then(data => {
        console.log('data after user save', data)
      })
    })



    .catch(error =>{
      console.log(error)
    })
  };
 const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

     createUser(email, password)
    .then(result => console.log(result.user))
    .catch(error => console.error(error));
};

  
  return (
    <main className="flex justify-center items-center min-h-screen bg-base-200 px-4 py-8">
      
        <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">
              Create an Account
            </h2>

            <form  onSubmit={handleCreateUser}>
              <fieldset className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="label text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

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

                <button
                  type="submit"
                  className="gradient-btn w-full btn-sm mt-2">
                  Register
                </button>
              </fieldset>
            </form>

            <div className="divider text-xs my-4">OR</div>

            <button
              onClick={handelGoogleSignIn}
              className="btn bg-white text-black border border-gray-300 w-full gap-2 hover:bg-gray-50 text-sm">
              <FaGoogle className="text-red-500" />
              Sign up with Google
            </button>

            <p className="text-center text-xs mt-4">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="link link-hover text-primary">
                Login here
              </Link>
            </p>

            {/* ===== Home Link ===== */}
            <p className="text-center text-xs mt-2">
              <Link to="/" className="link link-hover text-secondary">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
      
    </main>
  );
};

export default Register;