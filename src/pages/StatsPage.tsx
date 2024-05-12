import { NavLink } from "react-router-dom";
import { formatDate, formatTime, useAPI } from "../utils";
import "../styles/StatsPage.scss";
import { getCheckins as getCheckinsAPI } from "../services";
import { useEffect, useState } from "react";
import { take } from "rxjs";
import { GetCheckInsResponse } from "../models";

function StatsPage() {

	const { trigger: getCheckins, isLoading, error } = useAPI(getCheckinsAPI);
	const [mockData, setMockData] = useState<GetCheckInsResponse>();

	useEffect(() => {
		getCheckins()
			.subscribe((res) => {
				if (!res) return;
				setMockData(() => res);
			});
	}, [getCheckins]);

	return (
		<>
			<div>
				<table cellPadding={0} cellSpacing={0} border={0}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Date</th>
							<th>Check-in time</th>
							<th>Late</th>
						</tr>
					</thead>
					<tbody>
						{mockData?.checkins.map((item, i) => (
							<tr key={i}>
								<td>
									<NavLink to={`/stats/${item.userId}`}>{item.firstName + " " + item.lastName}</NavLink>
								</td>
								<td>{formatDate(item.checkInTime)}</td>
								<td>{formatTime(item.checkInTime)}</td>
								<td>{item.isLate && "X"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default StatsPage;