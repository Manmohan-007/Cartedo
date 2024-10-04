import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const DynamicCheckbox = ({ options, onChange }) => {
	const [checkedValues, setCheckedValues] = useState(
		Object.keys(options).reduce((acc, key) => {
			acc[key] = options[key];
			return acc;
		}, {})
	);

	const handleChange = (key) => (event) => {
		const newCheckedValues = { ...checkedValues, [key]: event.target.checked };
		setCheckedValues(newCheckedValues);
		onChange(key, event.target.checked);
	};

	return (
		<FormGroup>
			{Object.keys(checkedValues).map((key) => (
				<FormControlLabel
					key={key}
					control={
						<Checkbox
							checked={checkedValues[key]}
							onChange={handleChange(key)}
						/>
					}
					label={key}
				/>
			))}
		</FormGroup>
	);
};

export default DynamicCheckbox;
