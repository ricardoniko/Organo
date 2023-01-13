import Colaborador from "../Colaborador";
import "./index.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  return (
    //Mostrando a lista de time quando se a lista de colaboradores for maior que 0
    //Se a lista de colaboradores estiver vazia, retorna ''/vazio.
    props.colaboradores.length > 0 ? (
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    ) : (
      ""
    )
  );
};

export default Time;
