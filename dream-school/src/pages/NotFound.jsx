import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<Link to="/" className="wildcard-text">
				404 :(
			</Link>
		</>
	);
};

export default NotFound;
