import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: '0 auto',
  background: 'white',
  width: '80vw',
};

const pessoasCadastrada = {
  display: 'block',
  margin: '12px',
  background: 'white',
};

const imagem = {
  display: 'block',
  borderRadius: '50%',
  border: 'solid 5px rgb(241, 241, 241)',
  width: '100px',
  margin: '21px',
  background: 'white',
}

function App() {
  const [cadastro, setCadastro] = useState([]);

  useEffect(() =>{
    axios.get('https://randomuser.me/api/?results=10')
    .then((res) => setCadastro(res.data.results))
    .catch(error => console.error(error));
  }, []);
  return (
    <div className="App">
       <h1 style={{ textAlign: 'center', margin: '30px 0 50px 0', color: 'rgb(35, 57, 116)'}} >Pessoas cadastradas</h1>
       <div  style={ container }>
         {cadastro && cadastro.map((pessoas, index) => (
        <div style={ pessoasCadastrada } key= {index}>
          <img style={ imagem } src={pessoas.picture.medium} />
          <p style={ pessoasCadastrada }>{pessoas.name.first}</p>
        </div>
      ))}
       </div>
      
      
    </div>
  );
}

export default App;
