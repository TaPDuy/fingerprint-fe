import { Outlet } from "react-router-dom";
import { Navbar } from "../shared";
import "../styles/MainLayout.scss";

function MainLayout() {
	return (
		<div className="app-wrapper">
			<Navbar />
			<div className="content-wrapper">
				<Outlet />
			</div>
		</div>
	)
}

export default MainLayout;