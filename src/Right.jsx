import "./App.css";
import rightAnswer from "./assets/right.gif";
import portugal from "./assets/portugal.png";
import romania from "./assets/romania.png";
import { Link } from "react-router";

export default function Right() {
	return (
		<div className="rightContainer">
			<div className="feedback">
				<div className="feedbackRow">
					<img src={romania}></img>
					<p className="right">
						Cele mai loiale merg în camera următoare. Cele mai
						curajoase sar peste acea cameră și merg direct în
						următoarea! Nu uitați că sunteți o echipă și trebuie să
						comunicați între voi!
					</p>
				</div>
				<br></br>
				<div className="feedbackRow">
					<img src={portugal}></img>
					<p className="right">
						As mais leais seguem para a próxima sala. As mais
						corajosas passam essa sala à frente e vão para a
						seguinte! Não se esqueçam que são um grupo e devem
						comunicar entre vocês!
					</p>
				</div>
			</div>
			<img className="rightImg" src={rightAnswer}></img>
			<Link to="/">&larr;</Link>
		</div>
	);
}
