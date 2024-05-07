import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<ul>
				<li><NavLink to="/checkin" >Check-in</NavLink></li>
				<li><NavLink to="/stats" >Statistics</NavLink></li>
			</ul>
		</>
	)
}

export default Navbar;