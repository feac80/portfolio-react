import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-4 mb-4">Hello, my name is Frank Eduardo Araque</h1>
                <p className=" display-5 lead"> Thanks for the interest in my profile.</p>
                <hr />
                <a href="register.html" className="btn btn-lg btn-info mr-2">Contact me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
