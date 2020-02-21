import React from 'react'

const Login =()=> (
<div>
<div className="card">

    <h5 className="card-header info-color white-text text-center py-4">
        <strong>Subscribe</strong>
    </h5>

    <div className="card-body px-lg-5">

        <form className="text-center" style={{color: '#757575'}} action="#!">

            <p>Join our mailing list. We write rarely, but only the best content.</p>

            <p>
                <a href="" target="_blank">See the last newsletter</a>
            </p>
            <div className="md-form mt-3">
                <input type="text" id="materialSubscriptionFormPasswords" className="form-control"/>
                <label htmlFor="materialSubscriptionFormPasswords">Name</label>
            </div>

            <div className="md-form">
                <input type="email" id="materialSubscriptionFormEmail" className="form-control"/>
                <label htmlFor="materialSubscriptionFormEmail">E-mail</label>
            </div>
            <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Sign in</button>

        </form>

    </div>

</div>
</div>
   )
export default Login