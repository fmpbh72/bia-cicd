import React from "react";
import { Link } from "react-router-dom";
import DadosHenrylle from "./DadosHenrylle";
const About = () => {
  return (
    <div>
      <h4>Versão 2.1.0</h4>
      <h5>BootCamp Março de 2024</h5>
      <Link to="/">Voltar</Link>
      <DadosHenrylle />
    </div>
  );
};

export default About;
