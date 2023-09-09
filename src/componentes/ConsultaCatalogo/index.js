import { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import ConverteBase64ToImage from "../ConverteBase64ToImage";
const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json(); //retorna um array de objetos json
        //apresenta os dados na console como um string json
        console.log(JSON.stringify(dados));
        //carrega os dados na variavel produto
        setProdutos(dados);
      } catch (error) {
        setErro(error.message);
      }
    };
    consulta();
  }, []);
  const handleVoltar = () => {
    // Navegar para a rota "/home"
    navigate("/home");
  };

  return (
    <div>
      <h3>Consulta Catalogo </h3>
      <table id="produtos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Custo</th>
            <th>Quant</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.custo}</td>
              <td>{produto.quantidadeNoEstoque}</td>
              <td>
                <img
                  src={ConverteBase64ToImage(produto.imagem)}
                  alt="Imagem "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p></p>
      <button onClick={handleVoltar}>Voltar</button>
      <p></p>
      {erro && (
        <>
          <p>Erro na consulta: {erro} </p>{" "}
        </>
      )}
    </div>
  );
};
export default ConsultaCatalogo;
