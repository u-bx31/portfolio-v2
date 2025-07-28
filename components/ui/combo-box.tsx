"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface comboBox {
	list: { value: string; label: string; default?: boolean }[];
}

export function Combobox({ list }: comboBox) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(
		list.find((item) => item.default)?.value || ""
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-fit justify-between !p-2 cursor-pointer">
					{value
						? list.find((framework) => framework.value === value)
								?.label
						: "Lang"}
					<ChevronDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-fit p-0">
				<div className="flex flex-col gap-1 items-start px-1 py-1">
					{list.map((framework) => (
						<button
							className="flex w-full items-center rounded-sm px-2 py-1 text-sm font-normal outline-none transition-colors hover:bg-accent/30  "
							key={framework.value}
							value={framework.value}
							onClick={(currentValue) => {
								setValue(currentValue.currentTarget.value);
								setOpen(false);
							}}>
							{framework.label}
							<Check
								className={cn(
									"ml-2 w-4 h-4",
									value === framework.value
										? "opacity-100"
										: "opacity-0"
								)}
							/>
						</button>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}
