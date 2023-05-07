import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="container-fluid">
    <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Simple header</span>
      </Link>

      <ul className="nav nav-pills">
        <div className="nav-item"><Link to='/' className="nav-link active">Home</Link></div>
        <div className="nav-item"><Link to='/about' className="nav-link ">About</Link></div>
        <div className="nav-item"><Link to='/login' className="nav-link ">Login</Link></div>
      </ul>
    </header>
  </div>
    </>
  )
}

export default Header