import React from 'react'

function Navbar() {
  return (
    <div><nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">State Bank</a>
      </div>
  
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
          <li><a href="/">About</a></li>
        </ul>
    <div>
        <button  disabled={true}   className="btn btn-primary">
            Your Balance : 10000
        </button>
    </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar