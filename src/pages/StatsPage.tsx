import { NavLink } from "react-router-dom";
import { UserCheckIn } from "../models";
import { formatDate, formatTime } from "../utils";

function StatsPage() {

	const mockData: UserCheckIn[] = [
		{
			userId: 1,
			checkInTime: new Date(2023, 11, 12, 10, 11, 24),
			firstName: 'John',
			lastName: 'Smith',
			isLate: true
		},
		{
			userId: 2,
			checkInTime: new Date(2023, 11, 12, 10, 8, 24),
			firstName: 'John',
			lastName: 'Smith 2',
			isLate: false
		},
		{
			userId: 3,
			checkInTime: new Date(2023, 10, 12, 10, 10, 24),
			firstName: 'John',
			lastName: 'Smith 3',
			isLate: true
		},
	];

	return (
		<table>
			<tr>
				<th>Index</th>
				<th>Name</th>
				<th>Date</th>
				<th>Check-in time</th>
				<th>Late</th>
			</tr>
			{mockData.map((item, i) => (
				<tr key={i}>
					<th>{i}</th>
					<th>
						<NavLink to={`/stats/${item.userId}`}>{item.firstName + " " + item.lastName}</NavLink>
					</th>
					<th>{formatDate(item.checkInTime)}</th>
					<th>{formatTime(item.checkInTime)}</th>
					<th>{item.isLate && "X"}</th>
				</tr>
			))}
		</table>
	)
}

export default StatsPage;