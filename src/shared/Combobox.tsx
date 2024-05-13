import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "src/lib/utils"
import { Button } from "src/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from "src/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover"
import { useEffect, useMemo, useState } from "react"

export interface ComboboxSelectEvent<T> {
	value: T
}

export interface ComboboxProps<T> {
	placeholder?: string,
	emptyText?: string,
	items?: {
		value: T,
		label: string
	}[],
	defaultIndex?: number,
	defaultValue?: T,
	onSelected?: (e: ComboboxSelectEvent<T>) => void
}

function Combobox<T>(props: ComboboxProps<T>) {
	
	const items = useMemo(() => props.items ?? [], [props.items]);
	const [valueIndex, setValueIndex] = useState<number | null>(null);
	const [open, setOpen] = useState(false);

	const placeholder = props.placeholder ?? '';
	const emptyText = props.emptyText ?? 'No items.';
	const onSelected = props.onSelected ?? (() => {})

	useEffect(() => {
		const defaultValue = props.defaultValue && items.findIndex((item) => item.value === props.defaultValue);
		if (defaultValue != null && defaultValue !== -1) {
			setValueIndex(defaultValue);
		} else if (props.defaultIndex && props.defaultIndex > 0 && props.defaultIndex < items.length) {
			setValueIndex(props.defaultIndex);
		} else {
			setValueIndex(null);
		}
	}, [items, props.defaultIndex, props.defaultValue]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					<div>{valueIndex != null && items[valueIndex] ? items[valueIndex]?.label : placeholder}</div>
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandList>
						<CommandEmpty>{ emptyText }</CommandEmpty>
						{items.map((item, i) => (
							<CommandItem
								key={i}
								value={i.toString()}
								onSelect={(currentValue) => {
									setValueIndex(() => +currentValue);
									setOpen(false);
									onSelected({ value: item.value });
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										valueIndex === i ? "opacity-100" : "opacity-0"
									)} 
								/> {item?.label}
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default Combobox;
