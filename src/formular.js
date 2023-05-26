import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = (props) => {
  const [id, setId] = useState(props.obedit.id);
  const [ora, setOra] = useState(props.obedit.ora);
  const [titlu, setTitlu] = useState(props.obedit.titlu);
  const [loc, setLoc] = useState(props.obedit.loc);
  const [descriere, setDescriere] = useState(props.obedit.descriere);

  const stil = {
    h2: { textAlign: "center" },
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const activitate = { ora, titlu, loc, descriere };
    if (id === 0) {
      props.transmit(activitate);
    } else {
      activitate.id = id;
      props.editez(activitate);
    }
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        {id === 0 ? "Activitate noua" : "Editare activitate"}
      </h2>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Ora:</Form.Label>
          <Form.Control
            type="text"
            value={ora}
            onChange={(e) => setOra(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Titlu:</Form.Label>
          <Form.Control
            type="text"
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Loc:</Form.Label>
          <Form.Control
            type="text"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descriere:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formular;
