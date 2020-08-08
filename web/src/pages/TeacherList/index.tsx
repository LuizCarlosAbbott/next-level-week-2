import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;
