import dayjs from "dayjs";
import { GetCheckInsByIDResponse, GetCheckInsResponse, UserCheckIn } from "./models";

const NUM_CHECKINS = 50;
const CHECKINS: UserCheckIn[] = new Array(50).fill(0).map((_, i) => {
	return {
		userId: Math.floor(i / 5),
		firstName: 'John',
		lastName: `Smith ${Math.floor(i / 5)}`,
		checkInTime: dayjs().add(i, 'day').toDate(),
		isLate: !!(i % 2)
	}
});

const GET_LIST_CHECKINS: GetCheckInsResponse = {
	totalCheckin: NUM_CHECKINS,
	totalLate: CHECKINS.filter((checkin) => checkin.isLate).length,
	checkins: CHECKINS
};

const GET_LIST_CHECKINS_BY_ID = CHECKINS.reduce<{ [userId: number]: GetCheckInsByIDResponse }>((acc, checkin) => {
	const checkinByID = acc[checkin.userId];
	if (checkinByID) {
		checkinByID.totalCheckin += 1;
		checkinByID.totalLate += +checkin.isLate;
		checkinByID.checkins.push({ checkInTime: checkin.checkInTime, isLate: checkin.isLate });
	} else
		acc[checkin.userId] = { 
			checkins: [{ checkInTime: checkin.checkInTime, isLate: checkin.isLate }], 
			totalCheckin: 1, 
			totalLate: +checkin.isLate 
		};
	return acc;
}, {});

export { GET_LIST_CHECKINS, GET_LIST_CHECKINS_BY_ID }