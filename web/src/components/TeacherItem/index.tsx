import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/12374560?s=460&v=4"
          alt="Luiz Carlos"
        />
        <div>
          <strong>Luiz Carlos</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum <br />
        <br /> Lorem ipsum
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
