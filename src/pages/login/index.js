import React from 'react'
import './index.css'


export class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="formLogin">
        <h1> LOGIN </h1> 
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div className="toRegister">
            < button type = "submit"
            className = "btn btn-light " > Register </button>
          </div>
          

        </form>

      </div>
      )
  }
}