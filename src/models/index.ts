interface UserCheckIn {
	userId: number
	firstName: string
	lastName: string
	checkInTime: Date
	isLate: boolean
}

interface CheckInRecord {
	checkInTime: Date
	isLate: boolean
}

interface User {
	id: number
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
}

interface GetCheckInsResponse {
	totalCheckin: number
	totalLate: number
	checkins: UserCheckIn[]
}

interface GetCheckInsByIDResponse {
	totalCheckin: number
	totalLate: number
	checkins: CheckInRecord[]
}

enum DateRangeType {
	ALL,
	LAST_WEEK,
	THIS_WEEK,
	LAST_MONTH,
	THIS_MONTH,
	LAST_YEAR,
	THIS_YEAR,
	CUSTOM
}

interface DateRangePickerOption {
	value: DateRangeType
	label: string
}

export { DateRangeType };
export type { UserCheckIn, CheckInRecord, User, GetCheckInsResponse, GetCheckInsByIDResponse, DateRangePickerOption };