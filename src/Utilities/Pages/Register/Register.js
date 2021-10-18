import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { RegisterNewAccount, addName, setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  //get email value
  //   console.log(name);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    RegisterNewAccount(email, passWord)
      .then((userCredential) => {
        const user = userCredential.user;
        addName(name);
        setUser(user);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="min-h-screen container mx-auto py-16">
      <div className="text-center mt-7 pb-1">
        <h2 className="text-4xl font-semibold">Register Here</h2>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2">
          <img
            src="https://image.freepik.com/free-vector/register-button_53876-43916.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <form className="space-y-6 md:w-3/4">
            <div>
              <label htmlFor="name">Name</label>
              <input
                onBlur={handleName}
                id="name"
                type="text"
                className="w-full py-3 border-b-2 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmail}
                id="email"
                type="email"
                className="w-full py-3 border-b-2 outline-none"
                required
              />
            </div>
            <div className="mt-12">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePassword}
                id="password"
                type="password"
                required
                className="w-full py-3 border-b-2 outline-none"
              />
            </div>
            <h2 className="font-semibold text-red">{error}</h2>
            <button
              onClick={handleRegister}
              type="submit"
              className="bg-btn p-3 w-full rounded"
            >
              Register
            </button>
            <div>
              <h3 className="text-secondary">
                Already Have Account?
                <Link to="/sign-in">
                  <span className="text-primary font-semibold ml-1">
                    Sign in
                  </span>
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
