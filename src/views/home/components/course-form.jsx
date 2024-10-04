import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { CourseContext } from "../context/course-context";
import { useNavigate } from "react-router-dom";
import { postCourseData } from "./api";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	description: yup.string().required("Description is required"),
});

const CourseForm = () => {
	const navigate = useNavigate();
	const { dispatch } = useContext(CourseContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data1) => {
		try {
			const res = await postCourseData(data1);

			if (res) {
				dispatch({ type: "ADD_COURSE", payload: res });
				reset();
				navigate("/course-list");
			}
		} catch (error) {
			console.error("Failed to submit the course:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
			<div className="form-group">
				<label className="form-label">Title</label>
				<input
					className={`form-input ${errors.title ? "error-input" : ""}`}
					{...register("title")}
				/>
				<p className="error-message">{errors.title?.message}</p>
			</div>
			<div className="form-group">
				<label className="form-label">Description</label>
				<input
					className={`form-input ${errors.description ? "error-input" : ""}`}
					{...register("description")}
				/>
				<p className="error-message">{errors.description?.message}</p>
			</div>
			<button type="submit" className="submit-btn">
				Add Course
			</button>
		</form>
	);
};

export default CourseForm;
