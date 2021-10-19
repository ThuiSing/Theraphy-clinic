import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import imgLogo from "../../Images/login.jpg";
import icon from "../../Images/social-icons/google.png";
const SignIn = () => {
  const { GoogleLogIn, logInUsingEmailPass, setUser, setIsLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";
  console.log(location.state?.from);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    logInUsingEmailPass(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        history.push(redirectUrl);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogle = () => {
    GoogleLogIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirectUrl);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // console.log(user);
  return (
    <div className="min-h-screen container mx-auto py-16">
      <div className="text-center mt-7 pb-1">
        <h2 className="text-4xl font-semibold">Hey!Sign in Here</h2>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2">
          <img src={imgLogo} alt="" />
        </div>
        <div className="md:w-1/2">
          <form className="space-y-6 md:w-3/4">
            <div>
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmail}
                id="email"
                type="email"
                className="w-full py-3 border-b-2 outline-none"
              />
            </div>
            <div className="mt-12">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePass}
                id="password"
                type="password"
                className="w-full py-3 border-b-2 outline-none"
              />
            </div>
            <h2 className="text-red font-semibold">{error}</h2>
            <button
              onClick={handleSignin}
              type="submit"
              className="bg-btn p-3 w-full rounded"
            >
              Sign in
            </button>
            <div>
              <h3 className="text-secondary">
                Don't Have an Account?
                <Link to="/register">
                  <span className="text-primary font-semibold ml-1">
                    Register Now
                  </span>
                </Link>
              </h3>
            </div>
          </form>
          <div className="mt-4">
            <div className="mt-4">
              <h4 className="text-md font-medium">
                Another way to Sign in with
              </h4>
              <div className="mt-2">
                <button onClick={handleGoogle}>
                  <img className="w-8 " src={icon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
