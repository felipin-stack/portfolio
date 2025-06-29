import React, { useEffect } from 'react';
import './styles/Text.css';
import Threejs from './3d';

function Text() {
  return (
    <>
     <img src ="./public/images/react.png" alt="Perfil" className="perfil" />
     <img src ="./public/images/spring-boot-logo.png" alt="Spring" className="spring" />
      <img src ="./public/images/SQL.png" alt="SQL" className="SQL" />
      <img src ="./public/images/python-logo.png" alt="python" className="python" />
      <div className="principal">
        <h2>Olá,</h2>
        <h1 id="name1">Sou o </h1>
        <h1 id="name2">Felipe</h1>
        <span className="cursor"></span>
        <h1 id="text3">Desenvolvedor de Software</h1>
        <h3 id="text4">
          Sou Desenvolvedor de Software e estou cursando o 3° Ano do Ensino Médio técnico de T.I na FIEB
        </h3>
      </div>
      <div className="container">
        <Threejs></Threejs>
      </div>
    </>
  );
}

export default Text;
