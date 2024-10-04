import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

export const Date = ({ value, onDateChange, fieldName }) => {
	const handleDateChange = (newValue) => {
		const z = moment(newValue).format("DD-MM-YY");
		console.log(z, "z");
		onDateChange(newValue, fieldName);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker
					label="Basic date picker"
					value={value}
					onChange={handleDateChange}
					format="DD/MM/YYYY"
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
};
