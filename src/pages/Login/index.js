import React, { useState } from 'react';
import './index.scss';
import api from '../../services/api';

const Login = ({ history }) => {
  const [email, setEmail] = useState([]);

  const handlerSubmit2 = async event => {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    console.log(_id);

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  };

  return (
    <>
      <p>
        texto kjasdkjfaskjdfn <strong>sadfasdfasd</strong> asfasdfasd
      </p>

      <form onSubmit={handlerSubmit2}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name=""
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
};

export default Login;
