import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css'
import google from "../assets/google.png"
import { signupAPI ,getUser, loginAPI } from '../utils/constants';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import axios from 'axios';
import io from 'socket.io-client';
import { data } from '../main';

const Auth = () => {
  const initialValues = () => {
    setLoginStuff({ email: '', pass: '' });
  };
  const usenavigate = useNavigate('');
  const [toggle, setToggle] = useState(true);

  const [loginStuff, setLoginStuff] = useState({
    email: '',
    pass: '',
  });
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(data.auth, loginStuff.email, loginStuff.pass)
      .then(() => {
        const email = data.auth.currentUser.email;
        const password = loginStuff.pass
        const obj = {email, password };
        axios
            .post(loginAPI, obj)
            .then((responseData) => {
                    console.log(responseData)
                    localStorage.setItem('token', responseData.data.data.accessToken);
                    localStorage.setItem('userData', JSON.stringify(responseData.data));
                    usenavigate('../home')
            })
            .catch((err) => {
            console.error(err);
            });
      })
      .catch((err) => {
        initialValues();
        console.log(err);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    createUserWithEmailAndPassword(data.auth, email, password)
      .then(() => {
        const obj = { fullName:username, password, email };
        axios
          .post(getUser,obj)
          .then((res) => {
            console.log(res?.data)
            if (!res?.data?.data ) {
              axios
                .post(signupAPI, obj)
                .then((responseData) => {
                    setToggle(true)
                })
                .catch((err) => {
                  console.error(err);
                });
            } else {
                console.error(err);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(data.auth, provider)
      .then(() => {
        const username = data.auth.currentUser.displayName;
        const email = data.auth.currentUser.email;
        const password = username
          .split(' ')
          .reverse()
          .map((word) => word.split('').reverse().join(''))
          .join('')
          .toLowerCase();
        let obj = { fullName:username, email, password };
        axios
        .post(getUser,obj)
          .then((res) => {
            console.log(res?.data)
            if (!res?.data?.data ) {
              axios
                .post(signupAPI, obj)
                .then((responseData) => {
                    setToggle(true)
                })
                .catch((err) => {
                  console.error(err);
                });
            } else {
                console.error(err);
            }
          })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(data.auth, provider)
      .then(() => {
        const username = data.auth.currentUser.displayName;
        const email = data.auth.currentUser.email;
        const password = username
          .split(' ')
          .reverse()
          .map((word) => word.split('').reverse().join(''))
          .join('')
          .toLowerCase();
        const obj = {email, password };
        axios
            .post(loginAPI, obj)
            .then((responseData) => {
                    console.log(responseData)
                    localStorage.setItem('token', responseData.data.data.accessToken);
                    localStorage.setItem('userData', JSON.stringify(responseData.data));
                    usenavigate('../home')
            })
            .catch((err) => {
               console.error(err);
            });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleToggle = () => {
    setToggle(!toggle);
    initialValues();
  };
  return (
    <section className='entry_container forms'>
      {toggle ? (
        <div className='form login'>
          <div className='form-content'>
            <header>Login</header>
            <form onSubmit={handleLogIn}>
              <div className='field input-field'>
                <input
                  type='email'
                  placeholder='Email'
                  className='input'
                  value={loginStuff.email}
                  onChange={(e) =>
                    setLoginStuff({ ...loginStuff, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className='field input-field'>
                <input
                  type='password'
                  placeholder='Password'
                  className='password'
                  value={loginStuff.pass}
                  onChange={(e) =>
                    setLoginStuff({ ...loginStuff, pass: e.target.value })
                  }
                  required
                />
              </div>
              <div className='form-link'>
                <a className='forgot-pass'>Forgot password?</a>
              </div>
              <div className='field button-field'>
                <button>Login</button>
              </div>
            </form>
            <div className='form-link'>
              <span>
                Don't have an account?{' '}
                <a
                  onClick={handleToggle}
                  className='link signup-link'>
                  Signup
                </a>
              </span>
            </div>
          </div>
          <div className='line'></div>
          <div
            onClick={handleLogInWithGoogle}
            className='media-options cursor-pointer'>
            <a className='field google'>
              <img
                src={google}
                alt=''
                className='google-img'
              />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      ) : (
        <div className='form signup'>
          <div className='form-content'>
            <header>Signup</header>
              <form onSubmit={handleSignUp}>
                <div className='field input-field'>
                  <input
                    type='text'
                    name='username'
                    placeholder='Full Name'
                    className='input'
                    autoComplete='off'
                  />
                </div>
                <div className='field input-field'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='input'
                    autoComplete='off'
                  />
                </div>
                <div className='field input-field'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Create password'
                    className='password'
                    autoComplete='off'
                  />
                </div>
                <div className='field button-field'>
                  <button type='submit'>Signup</button>
                </div>
              </form>
            <div className='form-link'>
              <span>
                Already have an account?{' '}
                <a
                  onClick={handleToggle}
                  className='link login-link'>
                  Login
                </a>
              </span>
            </div>
          </div>
          <div className='line'></div>
          <div
            onClick={handleSignUpWithGoogle}
            className='media-options cursor-pointer'>
            <a className='field google'>
              <img
                src={google}
                alt=''
                className='google-img'
              />
              <span>Signup with Google</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Auth;
