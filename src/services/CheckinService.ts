import { catchError, delay, map, of } from "rxjs";
import { formatDate } from "../utils";
import API from "./API";
import { GET_LIST_CHECKINS, GET_LIST_CHECKINS_BY_ID } from "../mockData";

function checkin(formData: FormData) {
	return API.post('checkin', formData, {
		headers: {
			"Content-Type": "multipart/form-data"
		}
	});
}

function getCheckins(start?: Date, end?: Date) {
	API.get('list-checkin', {
		params: {
			startDate: start && formatDate(start),
			endDate: end && formatDate(end)
		}
	}).pipe(
		catchError((err) => {
			console.log(err?.message ?? 'Error');
			return of(null);
		})
	).subscribe();

	// TODO: Remove later
	return of(GET_LIST_CHECKINS).pipe(delay(2000));
}

function getCheckinsByID(id: number, start?: Date, end?: Date) {
	API.get(`list-checkin/${id}`, {
		params: {
			startDate: start && formatDate(start),
			endDate: end && formatDate(end)
		}
	}).pipe(
		catchError((err) => {
			console.log(err?.message ?? 'Error');
			return of(null);
		})
	).subscribe();

	// TODO: Remove later
	return of(GET_LIST_CHECKINS_BY_ID[id]).pipe(delay(2000));
}

export { checkin, getCheckins, getCheckinsByID };
