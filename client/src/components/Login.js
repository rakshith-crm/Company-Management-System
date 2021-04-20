import React from 'react';
import Avatar from '../images/login_avatar.png';
const Login = ()=>{
    return (
        <div>
<div>
    <br></br>
<h1 className="mt-5 mb-5">Admin Login</h1>
<hr></hr>
<div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded "  style={{display: 'flex',  textAlign : 'left'}}>
    <img alt='avatar missing' src={Avatar} className="rounded mx-auto d-block ml-10 mr-10 flex-left p-5" height="400px"></img>
    
    <form className='container flex-right p-5 '  style={{alignSelf : "right"}} action='/home'>

  <div className="form-group">
    <label className="mt-4">Username</label>
    <input type="text" className="form-control mb-3" aria-describedby="emailHelp" required/>
    <label >Password</label>
    <input type="text" className="form-control"required/>
  </div>

  <button type="submit" class="btn btn-primary btn-lg mt-3">Login</button>
</form>
</div>
</div>
        </div>
    );
};

export default Login;
