const apiUrl =
	"https://cartedo-mock-api-d9672364e747.herokuapp.com/api/courses";

export const postCourseData = async (reqData) => {
	try {
		const bodyData = {
			title: reqData.title,
			description: reqData.description,
			image:
				"https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg",
		};
		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bodyData),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error:", error);
	}
};
