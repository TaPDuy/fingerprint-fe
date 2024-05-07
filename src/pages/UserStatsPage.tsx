import { useParams } from "react-router-dom";

function UserStatsPage() {
	const { id } = useParams();
	return (
		<h1>Statistics of { id }</h1>
	)
}

export default UserStatsPage;