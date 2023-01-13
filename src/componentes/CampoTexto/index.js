import "./index.css";

//props: Propriedades que esse componente recebeu
const CampoTexto = (props) => {
  // Função para detectar quando for digitado alguma coisa no input.
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
