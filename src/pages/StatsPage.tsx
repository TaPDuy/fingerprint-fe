import { NavLink } from "react-router-dom";
import { formatDate, formatTime, useAPI } from "../utils";
import "../styles/StatsPage.scss";
import { getCheckins as getCheckinsAPI } from "../services";
import { useEffect, useState } from "react";
import { GetCheckInsResponse } from "../models";
import { DateRangePicker } from "../shared";
import { DateRange } from "react-day-picker";
import { X } from "lucide-react";

function StatsPage() {

	const { trigger: getCheckins, isLoading, error } = useAPI(getCheckinsAPI);
	const [range, setRange] = useState<DateRange>();
	const [mockData, setMockData] = useState<GetCheckInsResponse>();

	useEffect(() => {
		getCheckins(range?.from, range?.to)
			.subscribe((res) => {
				if (!res) return;
				setMockData(() => res);
			});
	}, [getCheckins, range]);

	return (
		<>
			<div className="flex flex-col gap-8 h-full">
				<DateRangePicker onSelected={(value) => setRange(() => value)} />
				{ isLoading && <h1>Loading...</h1> }
				{ error && <h1>{ error }</h1>}
				{ (!isLoading && !error) && <div className="max-w-[864px] self-center w-full h-full">
					<h3 className="font-bold p-4">Total late checkin: {`${mockData?.totalLate}/${mockData?.totalCheckin}`}</h3>
					<div className="w-full flex items-center overflow-auto h-[512px]">
						<table className="w-full border-collapse" cellPadding={0} cellSpacing={0} border={0}>
							<thead>
								<tr className="hover:bg-slate-100">
									<th className="text-center sticky top-0 bg-white">Name</th>
									<th className="text-center sticky top-0 bg-white">Date</th>
									<th className="text-center sticky top-0 bg-white">Check-in time</th>
									<th className="text-center sticky top-0 bg-white">Late</th>
								</tr>
							</thead>
							<tbody>
								{mockData?.checkins.map((item, i) => (
									<tr key={i} className="hover:bg-slate-100">
										<td className="text-center">
											<NavLink to={`/stats/${item.userId}`}>{item.firstName + " " + item.lastName}</NavLink>
										</td>
										<td className="text-center">{formatDate(item.checkInTime)}</td>
										<td className="text-center">{formatTime(item.checkInTime)}</td>
										<td className="flex justify-center">{item.isLate && <X color="red"/>}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div> }
			</div>
		</>
	)
}

export default StatsPage;