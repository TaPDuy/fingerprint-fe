import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
import classNames from "classnames";

function Navbar() {

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
				<NavLink 
					className={({ isActive }) => navItemClassNames(isActive)} 
					to="/stats" 
				>Statistics</NavLink>
			</nav>
		</>
	)
}

export default Navbar;