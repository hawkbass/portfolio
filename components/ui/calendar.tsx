"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useDatePicker } from "@rehookify/datepicker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = {
  className?: string
  classNames?: Record<string, string>
  showOutsideDays?: boolean
  value?: Date | null
  onChange?: (date: Date) => void
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  value,
  onChange,
}: CalendarProps) {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>(value ? [value] : [])
  const {
    data: { days, month, year },
    propGetters,
    navigation,
  } = useDatePicker({
    selectedDates,
    onDatesChange: (dates) => {
      setSelectedDates(dates)
      if (onChange && dates[0]) onChange(dates[0])
    },
    calendar: { months: 1 },
  })

  return (
    <div className={cn("p-3", className)}>
      <div className="flex justify-center pt-1 relative items-center">
        <button {...propGetters.previousMonthButton()} className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1")}
          aria-label="Previous Month">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium">{month + 1}/{year}</span>
        <button {...propGetters.nextMonthButton()} className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1")}
          aria-label="Next Month">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="w-full border-collapse space-y-1">
        <div className="flex">
          {propGetters.daysOfWeek().map((dow, i) => (
            <div key={i} className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center">
              {dow}
            </div>
          ))}
        </div>
        {days.map((week, i) => (
          <div key={i} className="flex w-full mt-2">
            {week.map((day, j) => (
              <button
                key={j}
                {...propGetters.dayButton(day)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                  day.selected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day.today && "bg-accent text-accent-foreground",
                  day.outside && "text-muted-foreground opacity-50",
                  day.disabled && "text-muted-foreground opacity-50"
                )}
                disabled={day.disabled}
              >
                {day.displayText}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
