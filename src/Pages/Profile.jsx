import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { email } = useParams();
  return (
    <Layout>
      <div className="container my-5">
        <main className="px-5">
          <h1>Welcome {email ? email.split("@")[0] : "User"}!</h1>
          <p className="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className="lead">
            <Link
              to="/"
              className="btn btn-lg btn-secondary fw-bold border-white"
            >
              Learn more
            </Link>
          </p>
        </main>
      </div>
    </Layout>
  );
};

export default Profile;
