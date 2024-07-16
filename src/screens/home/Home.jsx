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

  const handleCheckedToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <div>
      <Header />
      <main className="contentPage">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <div className="table">
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
                  <img src={lapis} alt="Edit" />
                  <img src={lixeira} alt="Delete" />
                </div>
              </div>
            ))}
            <div className="addItemTable">
              <p>Nova tarefa...</p>
              <img src={mais} alt="Add" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
