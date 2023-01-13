import "./index.css";

const Banner = () => {
  return (
    //JSX: Como o React lê e transforma em elementos no DOM, parece HTML mas não é.
    //React entende o código abaixo e realiza o append no DOM.

    // class é uma palavra reservada do javascript para uma classe, quando é projeto
    // em react, utilizar className no lugar de class.
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="O Banner principal da página do Organo"
      ></img>
    </header>
  );
};

export default Banner;
