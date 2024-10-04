import { CourseView, Header, Homepage } from "views";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import CourseList from "views/home/components/course-list";
import { CourseProvider } from "views/home/context/course-context";
import { Sidebar } from "views/home/components/sidebar";

function App() {
	return (
		<div className="App">
			<CourseProvider>
				<div className="layout-wrapper">
					<Header />
					<div className="body-wrapper">
						<Sidebar />
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/dashboard" element={<Homepage />} />
							<Route path="/course-list" element={<CourseList />} />
							<Route path="/course-view/:id" element={<CourseView />} />
						</Routes>
					</div>
				</div>
			</CourseProvider>
		</div>
	);
}

export default App;
