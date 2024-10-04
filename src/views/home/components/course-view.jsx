import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CourseContext } from "../context/course-context";

export const CourseView = () => {
	const location = useLocation();
	const id = location.pathname.split("/").pop();
	const { state, dispatch } = useContext(CourseContext);

	const [currentCourse, setCurrentCourse] = useState(null);

	const fetchCourse = async () => {
		try {
			const res = await fetch(
				`https://cartedo-mock-api-d9672364e747.herokuapp.com/api/courses/${id}`
			);
			const data = await res.json();
			setCurrentCourse(data);
		} catch (error) {
			console.error("Error fetching course:", error);
		}
	};

	useEffect(() => {
		fetchCourse();
	}, [id]);

	const handleEnroll = () => {
		console.log("Enroll button clicked for course ID:", id);
	};

	if (!currentCourse) {
		return <div>Loading course details...</div>;
	}

	return (
		<div className="course-view-container">
			<div>
				<img
					src={
						currentCourse.image ||
						"https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"
					}
					alt={currentCourse.title || "Course Image"}
				/>
			</div>
			<div>
				<div className="course-desc">
					<h2>{currentCourse.title}</h2>
					<p>{currentCourse.description}</p>
				</div>
				{state.enrolledCourses.some((c) => c.id === currentCourse.id) ? (
					<div className="enrolled-btn">Enrolled</div>
				) : (
					<div className="not-enrolled-btn" onClick={handleEnroll}>
						Enroll
					</div>
				)}
			</div>
		</div>
	);
};

export default CourseView;
