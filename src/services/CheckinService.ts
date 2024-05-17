import { formatDate } from "../utils";
import API from "./API";
import { GetCheckInsByIDResponse, GetCheckInsResponse, User } from "../models";

function checkin(formData: FormData) {
	return API.post<User>('checkin', formData, {
		headers: {
			"Content-Type": "multipart/form-data"
		}
	});
}

function getCheckins(start?: Date, end?: Date) {
	return API.get<GetCheckInsResponse>('list-checkin', {
		params: {
			startDate: start && formatDate(start),
			endDate: end && formatDate(end)
		}
	});
}

function getCheckinsByID(id: number, start?: Date, end?: Date) {
	return API.get<GetCheckInsByIDResponse>(`list-checkin/${id}`, {
		params: {
			startDate: start && formatDate(start),
			endDate: end && formatDate(end)
		}
	});
}

export { checkin, getCheckins, getCheckinsByID };
