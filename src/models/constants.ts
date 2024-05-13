import { DateRangePickerOption, DateRangeType } from ".";

const DATE_RANGE_PICKER_OPTIONS: DateRangePickerOption[] = [
	{
		value: DateRangeType.ALL,
		label: 'All time'
	},
	{
		value: DateRangeType.LAST_WEEK,
		label: 'Last week'
	},
	{
		value: DateRangeType.THIS_WEEK,
		label: 'This week'
	},
	{
		value: DateRangeType.LAST_MONTH,
		label: 'Last month'
	},
	{
		value: DateRangeType.THIS_MONTH,
		label: 'This month'
	},
	{
		value: DateRangeType.LAST_YEAR,
		label: 'Last year'
	},
	{
		value: DateRangeType.THIS_YEAR,
		label: 'This year'
	},
	{
		value: DateRangeType.CUSTOM,
		label: 'Custom'
	}
]

export { DATE_RANGE_PICKER_OPTIONS };
