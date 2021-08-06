import React from 'react'

function SingUp() {
    return (
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" name="email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" name="password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                {'{'}{'{'}-- <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div> --{'}'}{'}'}
                            </div>
                            {/* /.col*/}
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                            {/* /.col*/}
                        </div>
                    </form>
                    {/* /.social-auth-links */}
                    {'{'}{'{'}-- &lt; p class="mb-1"&gt;
                    <a href="forgot-password.html">I forgot my password</a>
                    --
                    {'}'}{'}'}
                </div>
                &lt; !-- /.login-card-body --&gt;
            </div>
        </div>

    )
}

export default SingUp
