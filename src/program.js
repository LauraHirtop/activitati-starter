import React from "react";
import Activitate from "./activitate";

const Program = (props) => {
	const { activitati, sterge, editeaza } = props;
	const lista = activitati.map((item) => (
		<Activitate
			id={item.id}
			key={item.id}
			ora={item.ora}
			titlu={item.titlu}
			loc={item.loc}
			descriere={item.descriere}
			sterge={sterge}
			editeaza={editeaza}
		/>
	));

	const stil = {
		h2: { textAlign: "center" },
	};

	return (
		<>
			<h2 className="mt-4" style={stil.h2}>
				Agenda
			</h2>
			<hr />
			<div>{lista}</div>
		</>
	);
};

export default Program;
