import { useParams } from "react-router-dom";
import { CheckInRecord, User } from "../models";
import { formatDate, formatTime } from "../utils";

function UserStatsPage() {
	const { id } = useParams();

	if (!id) return <></>;

	const userData: User = {
		id: Number.parseInt(id),
		firstName: "John",
		lastName: "Smith",
		email: "johnsmith@gmail.com",
		phoneNumber: "0903499034"
	}
	const totalCheckin = 1000;
	const totalLate = 10;
	const mockData: CheckInRecord[] = [
		{
			checkInTime: new Date(2023, 11, 12, 10, 11, 24),
			isLate: true
		},
		{
			checkInTime: new Date(2023, 11, 12, 10, 8, 24),
			isLate: false
		},
		{
			checkInTime: new Date(2023, 10, 12, 10, 10, 24),
			isLate: true
		},
	];

	return (
		<>
			<h1>Statistics of { userData.firstName + " " + userData.lastName }</h1>
			<div className="container">
				<div className="user-details">
					<table>
						<tr>
							<td>First name</td>
							<td>{userData.firstName}</td>
						</tr>
						<tr>
							<td>Last name</td>
							<td>{userData.lastName}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{userData.email}</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td>{userData.phoneNumber}</td>
						</tr>
					</table>
				</div>
				<div className="checkins">
					<div className="total"></div>
					<table>
						<tr>
							<th>Date</th>
							<th>Check-in time</th>
							<th>Late</th>
						</tr>
						{mockData.map((item, i) => (
							<tr key={i}>
								<td>{formatDate(item.checkInTime)}</td>
								<td>{formatTime(item.checkInTime)}</td>
								<td>{item.isLate && "X"}</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</>
	)
}

export default UserStatsPage;