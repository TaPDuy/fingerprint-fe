import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"
import { useState } from "react"
import { formatDate } from "../utils"

export interface DateRangePickerPopupProps {
	value?: DateRange,
	onSelected?: (value?: DateRange) => void
}

function DateRangePickerPopup(props: DateRangePickerPopupProps) {
	const [date, setDate] = useState<DateRange | undefined>(props.value);
	const onSelected = props.onSelected ?? (() => {});
	const handleOnChange = (value?: DateRange) => {
		setDate(() => value);
		onSelected(value);
	};

	return (
		<div className={cn("grid gap-2")}>
		<Popover>
			<PopoverTrigger asChild>
			<Button
				id="date"
				variant={"outline"}
				className={cn(
				"w-[300px] justify-start text-left font-normal",
				!date && "text-muted-foreground"
				)}
			>
				<CalendarIcon className="mr-2 h-4 w-4" />
				{date?.from ? (
				date.to ? (
					<>
					{formatDate(date.from)} -{" "}
					{formatDate(date.to)}
					</>
				) : (
					formatDate(date.from)
				)
				) : (
				<span>Pick a date</span>
				)}
			</Button>
			</PopoverTrigger>
			<PopoverContent className="w-fit p-0" align="start">
				<Calendar
					initialFocus
					mode="range"
					defaultMonth={date?.from}
					selected={date}
					onSelect={handleOnChange}
					numberOfMonths={1}
				/>
			</PopoverContent>
		</Popover>
		</div>
	)
}

export default DateRangePickerPopup;