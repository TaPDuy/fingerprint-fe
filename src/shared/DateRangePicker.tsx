import { DATE_RANGE_PICKER_OPTIONS } from "src/models/constants";
import Combobox, { ComboboxSelectEvent } from "./Combobox";
import { DateRangeType } from "src/models";
import { useState } from "react";
import dayjs from "dayjs";
import DateRangePickerPopup from "./DateRangePickerPopup";
import { DateRange } from "react-day-picker";

export interface DateRangePickerProps {
	onSelected?: (value?: DateRange) => void
}

function DateRangePicker(props: DateRangePickerProps) {

	const [currentType, setCurrentType] = useState(DateRangeType.THIS_WEEK);
	const [range, setRange] = useState<DateRange>();
	const onSelected = props.onSelected ?? (() => {});

	const handleTypeSelected = ({ value }: ComboboxSelectEvent<DateRangeType>) => {
		setCurrentType(value);

		let newRange!: DateRange;
		switch (value) {
			case DateRangeType.CUSTOM:
				return;
			case DateRangeType.ALL:
				break;
			case DateRangeType.LAST_WEEK:
				newRange = {
					from: dayjs().startOf('week').subtract(1, 'week').toDate(),
					to: dayjs().endOf('week').subtract(1, 'week').toDate()
				};
				break;
			case DateRangeType.THIS_WEEK:
				newRange = {
					from: dayjs().startOf('week').toDate(),
					to: dayjs().endOf('week').toDate()
				};
				break;
			case DateRangeType.LAST_MONTH:
				newRange = {
					from: dayjs().startOf('month').subtract(1, 'month').toDate(),
					to: dayjs().endOf('month').subtract(1, 'month').toDate()
				};
				break;
			case DateRangeType.THIS_MONTH:
				newRange = {
					from: dayjs().startOf('month').toDate(),
					to: dayjs().endOf('month').toDate()
				};
				break;
			case DateRangeType.LAST_YEAR:
				newRange = {
					from: dayjs().startOf('year').subtract(1, 'year').toDate(),
					to: dayjs().endOf('year').subtract(1, 'year').toDate()
				};
				break;
			case DateRangeType.THIS_YEAR:
				newRange = {
					from: dayjs().startOf('year').toDate(),
					to: dayjs().endOf('year').toDate()
				};
				break;
		}

		setRange(newRange);
		onSelected(newRange);
	};

	return (
		<>
			<Combobox 
				items={DATE_RANGE_PICKER_OPTIONS} 
				placeholder="Select date range" 
				onSelected={handleTypeSelected}
				defaultValue={currentType}
			/>
			{ currentType === DateRangeType.CUSTOM && <DateRangePickerPopup value={range} onSelected={setRange} /> }
		</>
	);
}

export default DateRangePicker;
