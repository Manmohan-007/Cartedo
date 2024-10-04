import { useEffect, useContext, useState } from "react";
import { CourseContext } from "../context/course-context";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
	const { state, dispatch } = useContext(CourseContext);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const fetchCourses = async () => {
		const res = await fetch(
			"https://cartedo-mock-api-d9672364e747.herokuapp.com/api/courses"
		);
		const data = await res.json();
		if (data) {
			dispatch({ type: "SET_COURSES", payload: data });
			setLoading(false);
			return;
		}
		setLoading(false);
		return;
	};

	useEffect(() => {
		if (state && state.courses.length === 0) {
			fetchCourses();
		}
		setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleEnroll = (course) => {
		if (state.enrolledCourses.find((c) => c.id === course.id)) {
			dispatch({ type: "UNENROLL_COURSE", payload: course });
		} else {
			dispatch({ type: "ENROLL_COURSE", payload: course });
		}
	};

	const handleCardClick = (id) => {
		navigate(`/course-view/${id}`);
	};

	if (loading) return <CircularProgress />;

	return (
		<div>
			<h1> Course List</h1>
			<div className="card-list-container">
				{state.courses.map((course) => (
					<div
						key={course.id}
						style={{ marginBottom: "20px" }}
						className="course-card-wrapper"
						onClick={() => handleCardClick(course.id)}>
						<img
							src={
								"https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"
							}
							alt={course.title}
						/>
						<h3>{course.title}</h3>
						<p>{course.description}</p>
						<button onClick={() => handleEnroll(course)}>
							{state.enrolledCourses.find((c) => c.id === course.id)
								? "Unenroll"
								: "Enroll"}
						</button>
						{state.enrolledCourses.find((c) => c.id === course.id) && (
							<span> (Enrolled)</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseList;
