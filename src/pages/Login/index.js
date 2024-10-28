import { Link} from 'react-router-dom';
import LoginForm from '../../components/Auth/LoginForm';
import './Login.css';

function Login() {
    return ( 
        <div id="main">
        <div className="container-login">
            <div className="form-login">
                <div className="row">
                    <div className="col-left">
                        <p className="platform-first"></p>
                        <p className="platform-second"></p>
                        <p className="platform-th"></p>
                        <p className="platform-n"></p>
                    </div>
                    <div className="col-right">
                        <div className="form">
                            <div className="title">
                                <h2>User Login</h2>
                            </div>
                            <LoginForm />
                        </div>
                        <div className="create">
                           <Link to="/register"> <p>Create Your Account <i className="fa-solid fa-arrow-right"></i></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
     );
}

export default Login;