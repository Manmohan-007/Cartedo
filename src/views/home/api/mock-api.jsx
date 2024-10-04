const courses = [
	{
		id: 1,
		title: "React Basics",
		description: "Learn the basics of React.",
		img: "https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg",
	},

	// {
	// 	id: 2,
	// 	title: "Advanced React",
	// 	description: "Learn advanced concepts in React.",
	// },
	// {
	// 	id: 3,
	// 	title: "JavaScript Essentials",
	// 	description: "Core JavaScript concepts.",
	// },
];

export const fetchCourses = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(courses);
		}, 1000);
	});
