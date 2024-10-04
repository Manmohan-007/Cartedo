import "./sidebar.scss";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
	const navigate = useNavigate();
	const handleOnAddCourse = () => {
		navigate("/");
	};

	return (
		<div className="sidebar-container">
			<div className="sidebar-content">
				<button onClick={handleOnAddCourse} className="add-course-btn">
					+ Add Course
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
