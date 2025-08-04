import "./App.css";
import wrongAnswer from "./assets/wrong.jpg";
import portugal from "./assets/portugal.png";
import romania from "./assets/romania.png";
import { Link } from "react-router";

export default function Wrong() {

	return (
		<div className="wrongContainer">
			<div className="feedback">
				<div className="feedbackRow">
					<img src={romania}></img>
					<h3>Răspuns greșit. Încearcă din nou!</h3>
				</div>
				<br></br>
				<div className="feedbackRow">
					<img src={portugal}></img>
					<h3>Resposta errada. Tenta novamente!</h3>
				</div>
			</div>
			<img className="wrongImg" src={wrongAnswer}></img>
			<Link to="/">&larr;</Link>
		</div>
	);
}
