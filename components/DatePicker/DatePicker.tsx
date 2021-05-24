import React, { HTMLAttributes } from "react";
import ReactDatePicker from "react-datepicker";
import { useColorMode } from "@chakra-ui/react";

interface Props {
  isClearable?: boolean;
  onChange: (date: Date) => any;
  selectedDate: Date | undefined;
  showPopperArrow?: boolean;
}

const DatePicker = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
  ...props
}: Props & HTMLAttributes<HTMLElement>) => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <ReactDatePicker
        selected={selectedDate}
        onChange={onChange}
        isClearable={isClearable}
        showPopperArrow={showPopperArrow}
        className="react-datapicker__input-text"
        {...props}
      />
    </div>
  );
};

export default DatePicker;
