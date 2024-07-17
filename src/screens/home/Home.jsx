import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import check from "../../assets/check.svg";
import checked from "../../assets/checked.svg";
import lapis from "../../assets/lapis.svg";
import lixeira from "../../assets/lixeira.svg";
import mais from "../../assets/mais.svg";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Limpar a casa", isChecked: false },
    { id: 2, text: "Responder e-mails", isChecked: false },
  ]);

  const [CardContents] = useState([
    {
      id: 1,
      text: "Deseja editar esse item?",
      description: "Colocar as descrições das tarefas aqui.",
    },
    {
      id: 2,
      text: "Deseja excluir esse item?",
      description: "Colocar as descrições das tarefas aqui.",
    },
  ]);

  const [activeCard, setActiveCard] = useState(null);

  const handleCheckedToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleCardOpen = (id) => {
    setActiveCard(id);
  };

  const handleCardClose = () => {
    setActiveCard(null);
  };

  return (
    <div>
      <Header />
      <main className="contentPage">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <div className="table">
          {activeCard === null ? (
            <>
              <div className="tableHead">
                <p>Tarefa</p>
                <p>Status</p>
                <p>Opções</p>
              </div>
              <div className="tableBody">
                {tasks.map((task) => (
                  <div className="tableItem" key={task.id}>
                    <p>{task.text}</p>
                    <div className="checkbox">
                      <img
                        className=""
                        src={task.isChecked ? checked : check}
                        alt="Status"
                        onClick={() => handleCheckedToggle(task.id)}
                      />
                    </div>
                    <div className="displayFlexIcons">
                      <img src={lapis} alt="Edit" onClick={() => handleCardOpen(1)} />
                      <img src={lixeira} alt="Delete" onClick={() => handleCardOpen(2)} />
                    </div>
                  </div>
                ))}
                <div className="addItemTable">
                  <p>Nova tarefa...</p>
                  <img src={mais} alt="Add" />
                </div>
              </div>
            </>
          ) : (
            CardContents.filter((card) => card.id === activeCard).map((card) => (
              <div className="cardEditarTask" key={card.id}>
                <p>{card.text}</p>
                <p>{card.description}</p>
                <div className="displayFlexButtons">
                  <button onClick={handleCardClose}>Não</button>
                  <button onClick={handleCardClose}>Sim</button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
