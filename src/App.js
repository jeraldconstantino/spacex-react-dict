import "./App.css";
import Info from "./component/Info";
import History from "./component/History";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Info />
				<History />
			</header>
		</div>
	);
}

export default App;
