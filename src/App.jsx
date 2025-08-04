import { useState } from "react";
import "./App.css";
import imgUrl from "./assets/background2.webp";
import wrongAnswer from "./assets/wrong.webp";
import portugal from "./assets/portugal.png";
import romania from "./assets/romania.png";
import { useNavigate } from "react-router";

function App() {
	const [response, setResponse] = useState("");
	const [wrong, setWrong] = useState(false);
	const [right, setRight] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setResponse(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			response.includes("gato") ||
			response.includes("cat") ||
			response.includes("pisic") ||
			response.includes("pisi") || 
      response.includes("motan") || 
      response.includes("pisoi")
		) {
			setRight(true);
			setWrong(false);
			navigate("/right");
		} else {
			setWrong(true);
			setRight(false);
			navigate("/wrong");
		}
	};

	return (
		<div className="appContainer">
			<img src={imgUrl} className="taylor"></img>
			{/* <h1>La mulți ani, Cassia!</h1> */}
			{/* <h2>
				Pentru a trece la nivelul următor, trebuie să răspundeți corect
				la întrebarea de mai jos
			</h2> */}
			<div className="question">
				<div className="questionRow">
					<img src={romania}></img>
					<h3>Ce aveau în comun ultimele 3 camere?</h3>
				</div>
				<br></br>
				<div className="questionRow">
					<img src={portugal}></img>
					<h3>O que havia em comum nas 3 salas anteriores?</h3>
				</div>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					autoFocus
					placeholder="Răspuns / Resposta"
					onChange={handleChange}
				></input>
				<button type="submit">&rarr;</button>
			</form>
		</div>
	);
}

export default App;
