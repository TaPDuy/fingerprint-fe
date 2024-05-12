import { useParams } from "react-router-dom";
import { CheckInRecord, GetCheckInsByIDResponse, User } from "../models";
import { formatDate, formatTime, useAPI } from "../utils";
import { useEffect, useState } from "react";
import { getCheckinsByID as getCheckinsByIDAPI } from "../services";

function UserStatsPage() {
	const { id } = useParams();

	const { trigger: getCheckinsByID, isLoading, error } = useAPI(getCheckinsByIDAPI);
	const [mockData, setMockData] = useState<GetCheckInsByIDResponse>();
	
	useEffect(() => {
		if (!id) return;

		getCheckinsByID(id)
			.subscribe((res) => {
				if (!res) return;
				setMockData(() => res);
			});
	}, [getCheckinsByID, id]);

	if (!id) return <></>;

	const userData: User = {
		id: Number.parseInt(id),
		firstName: "John",
		lastName: "Smith",
		email: "johnsmith@gmail.com",
		phoneNumber: "0903499034"
	}

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
						{mockData?.checkins.map((item, i) => (
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