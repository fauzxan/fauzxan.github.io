import React from "react";
import "./global.css"

function sideBar() {
	return (
			<nav
				className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding w4-custom"
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
					<a
						href="/"
						onclick="w3_close()"
						className="w3-bar-item w3-button w3-hover-white"
					>
						Home
					</a>
					<a
						href="#showcase"
						onclick="w3_close()"
						className="w3-bar-item w3-button w3-hover-white"
					>
						Projects
					</a>
					<a
						href="#services"
						onclick="w3_close()"
						className="w3-bar-item w3-button w3-hover-white"
					>
						Blogs
					</a>
					<a
						href="#designers"
						onclick="w3_close()"
						className="w3-bar-item w3-button w3-hover-white"
					>
						Experience
					</a>
					<a
						href="#packages"
						onclick="w3_close()"
						className="w3-bar-item w3-button w3-hover-white"
					>
						Courses Taken
					</a>
					<a
						href="#contact"
						onclick="w3_close()"
						className="w3-bar-item w3-button w3-hover-white"
					>
						Contact
					</a>
				</div>
			</nav>
	);
}
export default sideBar;