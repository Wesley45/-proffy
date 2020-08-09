import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

interface TeacherItem {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function handleSearchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  function createNewConnection(id: number) {
    api.post("connections", {
      user_id: id,
    });
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form action="" id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação física", label: "Educação física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input
            type="time"
            label="Hora"
            name="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: TeacherItem) => {
          return (
            <article className="teacher-item">
              <header>
                <img src={teacher.avatar} alt="" />
                <div>
                  <strong>{teacher.name}</strong>
                  <span>{teacher.subject}</span>
                </div>
              </header>
              <p>{teacher.bio}</p>
              <footer>
                <p>
                  Preço/hora
                  <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                  href={`https://wa.me/${teacher.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => createNewConnection(teacher.id)}
                >
                  <img src={whatsappIcon} alt="Whatsapp" />
                  Entrar em contato
                </a>
              </footer>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export default TeacherList;
