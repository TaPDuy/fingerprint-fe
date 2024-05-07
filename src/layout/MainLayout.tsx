import { Outlet } from "react-router-dom";
import { Navbar } from "../shared";

function MainLayout() {
	return (
		<div className="app-wrapper">
			<Navbar/>
			<Outlet />
		</div>
	)
}

export default MainLayout;