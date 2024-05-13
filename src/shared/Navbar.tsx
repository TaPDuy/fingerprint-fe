import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
import classNames from "classnames";
import { useAuthContext } from "../context";

function Navbar() {

	const { isAdmin, logout } = useAuthContext();

	function navItemClassNames(isActive: boolean) {
		return classNames({
			"nav-item": true,
			"nav-item-active": isActive
		});
	}

	return (
		<>
			<nav>
				<NavLink 
					className={({ isActive }) => navItemClassNames(isActive)} 
					to="/checkin" 
				>Check-in</NavLink>
				{ isAdmin && <>
					<NavLink 
						className={({ isActive }) => navItemClassNames(isActive)} 
						to="/stats" 
					>Statistics</NavLink>
					<NavLink 
						className={({ isActive }) => navItemClassNames(isActive)} 
						to="/models" 
					>Models</NavLink>
				</>}
				<button 
					className="nav-item logout-button"
					onClick={() => {
						logout();
					}}
				>Logout</button>
			</nav>
		</>
	)
}

export default Navbar;