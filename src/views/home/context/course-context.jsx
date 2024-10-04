import { createContext, useReducer } from "react";

const initialState = {
	courses: [],
	enrolledCourses: [],
};

const courseReducer = (state, action) => {
	switch (action.type) {
		case "SET_COURSES":
			return { ...state, courses: action.payload };
		case "ENROLL_COURSE":
			return {
				...state,
				enrolledCourses: [...state.enrolledCourses, action.payload],
			};
		case "UNENROLL_COURSE":
			return {
				...state,
				enrolledCourses: state.enrolledCourses.filter(
					(course) => course.id !== action.payload.id
				),
			};
		case "ADD_COURSE":
			return { ...state, courses: [...state.courses, action.payload] };
		default:
			return state;
	}
};

// Create context
export const CourseContext = createContext();

// Provider component
export const CourseProvider = ({ children }) => {
	const [state, dispatch] = useReducer(courseReducer, initialState);

	return (
		<CourseContext.Provider value={{ state, dispatch }}>
			{children}
		</CourseContext.Provider>
	);
};
