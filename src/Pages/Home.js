import React from 'react'
import { Link } from 'react-router-dom';
import useLocalStorage from '../_hooks/use-localStorage'
import { authServices } from '../_services/auth-services';

const Home = () => {
    const [user] = useLocalStorage('user');

    function handleLogout(){
        authServices.logout();
    }

    let randomArray = [1, 2,3,4,5,6,7,8,9];
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <span className="navbar-brand mb-0 h1">No Redux</span>
            <div className="d-flex align-items-center">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fillRule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
              <span className="text-uppercase ml-3">{user.username}</span>
            </div>
          </div>
        </nav>
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">No Redux</h1>
                <p className="lead text-muted">
                  Welcome <span className="text-uppercase">{user.username}</span>,<br/>
                  You are logged in. There is no redux used to manage the state of the application..No backend either. Nice!
                </p>
                <p>
                  <Link to="" onClick={handleLogout}>Logout</Link>
                </p>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {randomArray.map((item, index) => (
                <div className="col mb-4" key={index}>
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Home
