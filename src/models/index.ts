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

export type { UserCheckIn, CheckInRecord, User };