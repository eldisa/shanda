"use client";

import { useState, useEffect, useRef } from "react";
import { addDays, getDate, isSameDay, isSameMonth } from "date-fns";

const today = new Date();
const MyDatePicker: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const [monthDetails, setMonthDetails] = useState<Date[]>([]);
    const [dateState, setDateState] = useState({
        prevSelected: today,
        selected: today,
    });
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMonthDetails(
            getMonthDetails(selectedDate.getFullYear(), selectedDate.getMonth())
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate]);

    const getMonthDetails = (year: number, month: number): Date[] => {
        const firstDay = new Date(year, month, 1).getDay();
        const monthArray = [];

        for (let i = 0; i < 42; i++) {
            const date = addDays(new Date(year, month, 1), i - firstDay);
            monthArray.push(date);
        }

        return monthArray;
    };

    const onDateClick = (day: Date) => {
        setSelectedDate(day);
        const { selected } = dateState;
        setDateState({
            prevSelected: selected,
            selected: day,
        });
    };

    const setMonth = (offset: number) => {
        setSelectedDate(
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + offset,
                selectedDate.getDate()
            )
        );
    };

    const renderCalendar = () => {
        const { prevSelected, selected } = dateState;
        let [startDate, endDate] = [0, 0];

        if (prevSelected <= selected) {
            [startDate, endDate] = [prevSelected.getTime(), selected.getTime()];
        } else {
            [startDate, endDate] = [selected.getTime(), prevSelected.getTime()];
        }

        return (
            <div className="relative block" id="calendar">
                <div className="flex flex-wrap w-full m-0 gap-0">
                    {monthDetails.map((day, index) => {
                        let className =
                            "w-[50px] min-h-[36px] hover:bg-[#e6e6e6] box-border m-0 p-0 flex items-center justify-center";
                        const timestamp = day.getTime();
                        if (isSameDay(today, day)) {
                            className += " bg-[#ffff76]";
                        } else if (!isSameMonth(today, day)) {
                            className +=
                                " bg-[#757575] pointer-events-none"; /* disabled */
                        } else if (
                            timestamp >= startDate &&
                            timestamp <= endDate
                        ) {
                            className += " bg-[#006edc]";
                        } else {
                            className += " bg-white";
                        }

                        return (
                            <div
                                className={className}
                                key={index}
                                onClick={() => onDateClick(day)}
                            >
                                <div className="flex items-center justify-center h-full text-xs font-light">
                                    {getDate(day)}日
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="MyDatePicker">
            <div className="absolute left-0 top-10 w-[350px] h-[240px] overflow-hidden text-base">
                <div className="flex mb-4 h-11">
                    <div
                        className="flex items-center justify-center h-11 w-11 bg-white hover:bg-[#e6e6e6]"
                        onClick={() => setMonth(-1)}
                    >
                        <p className="w-full text-center">{"<"}</p>
                    </div>
                    <div className="flex items-center justify-center h-11 w-[262px]">
                        <p className="w-full text-center">
                            {selectedDate.getFullYear()}年
                            {selectedDate.getMonth() + 1}月
                        </p>
                    </div>
                    <div
                        className="flex items-center justify-center h-11 w-11 bg-white hover:bg-[#e6e6e6]"
                        onClick={() => setMonth(1)}
                    >
                        <p className="w-full text-center">{">"}</p>
                    </div>
                </div>
                <div className="flex">{renderCalendar()}</div>
            </div>
        </div>
    );
};

export default MyDatePicker;
