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
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

interface comboBox {
	list: string[];
	defaultValue?: string;
	className?: string;
}

export function Combobox({
	list,
	className,
	defaultValue,
	...props
}: comboBox) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(defaultValue || "");
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();

	const handleOnChange = (lang: string) => {
		router.replace(
			// @ts-expect-error -- TypeScript will validate that only known `params`
			// are used in combination with a given `pathname`. Since the two will
			// always match for the current route, we can skip runtime checks.
			{ pathname, params },
			{ locale: lang }
		);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					role="combobox"
					aria-expanded={open}
					className={
						"w-fit justify-between !p-2 cursor-pointer " + className
					}>
					{value.charAt(0).toUpperCase() + value.slice(1) || "Lang"}
					<ChevronDown className="opacity-70" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-fit p-0">
				<div className="flex flex-col gap-1 items-start px-1 py-1">
					{list.map((item) => (
						<button
							className="flex w-full items-center rounded-sm px-2 py-1 text-sm font-normal outline-none transition-colors hover:bg-accent/30  "
							key={item}
							value={item}
							onClick={(currentValue) => {
								handleOnChange(currentValue.currentTarget.value);
								setValue(currentValue.currentTarget.value);
								setOpen(false);
							}}>
							{item.charAt(0).toUpperCase() + item.slice(1)}
							<Check
								className={cn(
									"ml-2 w-4 h-4",
									value === item ? "opacity-100" : "opacity-0"
								)}
							/>
						</button>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}
