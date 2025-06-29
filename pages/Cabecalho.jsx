import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Cabecalho() {


  return (
    <>
    <header>
      <div className='conteudo'>
    <nav>
    
    <h1>
       <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
      HOME
      </Link>
      </h1> 
    
      <h1>
       <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
      ABOUT
      </Link>
      </h1> 
    <h1>CONTACT</h1>

    </nav>
    </div>
    </header>
    </>
  )
}

export default Cabecalho;
