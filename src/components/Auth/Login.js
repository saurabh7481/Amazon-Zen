import React, {useState} from 'react'
import classes from './Login.module.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';

function Login() { 
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => { 
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    return ( 
        <div className={classes.login}>
            <Link to="/">
                <img src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
                    className={classes.login__logo}
                    alt="logo"/>
            </Link>
            <div className={classes.login__container}>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)}
                        className={classes.login__input} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)}
                        className={classes.login__input} type="password" />
                    <button onClick={login}
                    type="submit" className={classes.login__signInButton}>Sign In</button>
                </form>
                <p>By signing in, you agree to all the terms
                    and conditions of being a member of zenMart(amazon clone) community.
                </p>
                <button onClick={register}
                className={classes.login__registerButton}>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login;
