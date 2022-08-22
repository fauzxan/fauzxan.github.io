import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Socials from "./socials";

export default function sideBar() {
	return (
		<nav
			className="w3-sidebar w3-black w3-collapse w3-top w3-large w3-padding w4-custom"
			id="mySidebar"
		>
			<br />
			<div className="w3-container">
				<h3 className="w3-padding-64">
					<b>
						Mohammed
						<br />
						Fauzaan
					</b>
				</h3>
			</div>
			<div className="w3-bar-block">
				<a className="w3-bar-item w3-button w3-hover-blue" href="/">
					Home
				</a>
				<a
					href="/projects"
					className="w3-bar-item w3-button w3-hover-blue"
				>
					Projects
				</a>
				<a
					href="/projects"
					className="w3-bar-item w3-button w3-hover-blue"
				>
					Blogs
				</a>
				<a
					href="/projects"
					className="w3-bar-item w3-button w3-hover-blue"
				>
					Experience
				</a>
				<a
					href="/courses"
					className="w3-bar-item w3-button w3-hover-blue"
				>
					Courses Taken
				</a>
				<a
					href="contact"
					className="w3-bar-item w3-button w3-hover-blue"
				>
					Contact
				</a>
			</div>
			<div className="w3-bottom">
				<Socials />
			</div>
			
		</nav>
	);
}
