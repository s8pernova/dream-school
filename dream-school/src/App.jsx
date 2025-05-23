import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TransferForm from "./pages/TransferForm.jsx";
import TransferResults from "./pages/TransferResults.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/transform" element={<TransferForm />} />
				<Route path="/results" element={<TransferResults />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
