import React from "react";
import "./styles.css";
import AppNavbar from "./componentes/AppNavbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <AppNavbar />
      {/* Outros componentes e rotas */}
      <Link to="/produtos/catalogo">Consultar catalogo de produtos</Link>
    </div>
  );
};
export default Home;
