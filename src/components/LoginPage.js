import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/drivenzon.js";
import UserContext from "../contexts/UserContext.js";

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    const body = {
      email,
      password
    };

    login(body)
      .then(res => {
        setUserData(res.data);
        navigate('/');
      })
      .catch(res => {
        console.log(res.data);
        alert("Email ou senha incorretos");
      });
  }

  return (
    <Wrapper>
      <h1>drivenzon</h1>
      <Form onSubmit={e => handleForm(e)}>
        <input type='email'
          placeholder="Email"
          value={email}
          onChange={(e => setEmail(e.target.value))}
          required
        />
        <input type='password'
          placeholder="Senha"
          value={password}
          onChange={(e => setPassword(e.target.value))}
          required />
        <button>Entrar</button>
      </Form>
      <Link to='/register'>Primeira vez? Cadastre-se!</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 30px;
  }

  a{
    text-decoration: none;
    font-size: 15px;
    font-style: 700;
    color: #FFFFFF;
    margin-top: 35px;

  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 20px;

  input{
    width: 90%;
    max-width: 400px;
    height: 60px;
    padding: 15px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4 4 0 rgba(0,0,0,0.25);
  }

  button {
    width: 90%;
    max-width: 400px;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0 4 4 0 rgba(0,0,0,0.25);
    cursor: pointer;
    background-color: magenta;
    border: 1px solid magenta;
    color: #FFFFFF;
    font-style: 700;
  }
`;