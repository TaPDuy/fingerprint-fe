import dayjs from 'dayjs';
import useAPI from './useAPI';

const DATE_TIME_FORMAT = 'HH:mm DD/MM/YYYY';
const TIME_FORMAT = 'HH:mm';
const DATE_FORMAT = 'DD/MM/YYYY';

function formatDateTime(date?: Date) {
	return dayjs(date).format(DATE_TIME_FORMAT);
}

function formatDate(date?: Date) {
	return dayjs(date).format(DATE_FORMAT);
}

function formatTime(date?: Date) {
	return dayjs(date).format(TIME_FORMAT);
}

export { formatDateTime, formatTime, formatDate, useAPI };