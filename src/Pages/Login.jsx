import React, { useState } from "react";
import logo from "../assets/bootstrap-logo.svg";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const style = {
    width: "100%",
    maxWidth: "360px",
    padding: "15px",
    margin: "0 auto",
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("🦄 Fields cannot be Empty!", {
        position: "top-right",
        autoClose: 2000,
      });
    }

    const data = await login(email, password);
    if (data.email) {
      toast.success("🦄 Logged in successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate(`/profile/${data.email}`);
      return;
    }

    toast.error("🦄 Invalid Credentials!", {
      position: "top-right",
      autoClose: 2000,
    });
  };
  return (
    <Layout>
      <div style={style} className="my-4 bg-light">
        <div className="text-center">
          <div className="form-signin p-4">
            <form onSubmit={handleSubmit}>
              <img className="mb-4" src={logo} alt="" width="72" height="57" />
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control my-3"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center my-4">
      Don't have account, <Link to='/register'>Register here</Link>
      </div>
    </Layout>
  );
};

export default Login;
