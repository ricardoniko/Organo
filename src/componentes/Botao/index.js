import "./index.css";

const Botao = (props) => {
  //.children : Recebe tudo o que estiver dentro da tag <Botao></Botao>
  //Pode colocar imagem, icone e até mesmo outro componente.
  return <button className="botao">{props.children}</button>;
};

export default Botao;
