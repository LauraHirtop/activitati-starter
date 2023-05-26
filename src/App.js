import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Formular from "./formular";
import Program from "./program";
import Lipsa from "./lipsa";
import "./app.css";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    ora: "",
    titlu: "",
    loc: "",
    descriere: "",
  });
  const navigate = useNavigate();


  const stergActiv = (id) => {
    const listaNoua = lista.filter((item) => {
      if (item.id !== id) {
        return true;
      }
      return false;
    });
    setLista(listaNoua); //  lista se modifica, deci se declanseaza useEffect (a doua)
  };

  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" }
  };

  //  Adaug în "lista" obiectul creat în "Formular"
  const adaugaActiv = (elm) => {
    elm.id = lista.length + 1;
    setLista([...lista, elm]); //  lista se modifica, deci se declanseaza useEffect (a doua)
    navigate("/");
  };

  const editeazaActiv = (id) => {
    const obiect = lista.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10);
    });
    if (obiect) {
      setEdit({
        id: obiect.id,
        ora: obiect.ora,
        titlu: obiect.titlu,
        loc: obiect.loc,
        descriere: obiect.descriere
      });
      navigate("/formular"); //  Impun ruta "/formular", deci declansez afisarea formularului
    }
  };

  const editActiv = (elm) => {
    //  Parcurg lista. Daca gasesc elementul editat, inlocuiesc obiectul
    const listaNoua = lista.map((item) => {
      if (item.id === elm.id) {
        return elm;
      } else {
        return item;
      }
    });
    setLista(listaNoua); //  Modific variabila "lista", deci se declanseaza useEffect()

    //  Golesc obiectul edit din "state"
    setEdit({
      id: 0,
      ora: "",
      titlu: "",
      loc: "",
      descriere: ""
    });
    navigate("/"); // Impun ruta "/", deci se va afisa componenta "Program"
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="primary" variant="dark" expand="sm" className="p-2">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Program
            </NavLink>
            <NavLink
              to="/formular"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Formular
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Program
              activitati={lista}
              sterge={stergActiv}
              editeaza={editeazaActiv}
            />
          }
        />
        <Route
          path="/formular"
          element={
            <Formular transmit={adaugaActiv} obedit={edit} editez={editActiv} />
          }
        />
        <Route path="*" element={<Lipsa />} />
      </Routes>
    </Container>
  );
}
