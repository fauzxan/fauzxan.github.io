import React from "react";
import Val from "./images/Val.png";

function PageContent() {
    return (
		<div className="w3-main" id="pagecontenttop">
			{/*<!-- Header -->*/}
			<div className="w3-container" id="showcase">
				<h1 className="w3-jumbo"><b>Hii</b></h1>
				<h1 className="w3-xxxlarge w3-text-blue"><b>-</b></h1>
			</div>


			{/*<!-- Modal for full size images on click-->*/}
			<div
				id="modal01"
				className="w3-modal w3-black"
			>
				<span className="w3-button w3-black w3-xxlarge w3-display-topright">×</span>
				<div
					className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64"
				>
					<img id="img01" className="w3-image" alt="random"/>
					<p id="caption"></p>
				</div>
			</div>

			{/*<!-- Services -->*/}
			<div className="w3-container" id="services">
				<h1 className="w3-xxxlarge w3-text-blue"><b>About</b></h1>
				<p>
					I am a third year student studying Computer Science at Singapore University of Technology and Design.
				</p>
				<p>
					Through SUTDs holistic project based syllabus, I have been able to complete numerous projects, write multiple essays and reports that directly relate to every module that I have taken here. 
				</p>
				<p>
					This website is meant to showcase all the stuff that I have made throughout my time here! <b> Click the links on the sidebar on the left to find out more!</b>
				</p>
			</div>

			
			<div className="w3-row-padding">
				<div className="w3-half">
					<img
						src={Val}
                        className="photoGridModal"
						alt="Concrete meets bricks"
					/>
					<img
						src={Val}
                        className="photoGridModal"
						alt="Light, white and tight scandinavian design"
					/>
					<img
						src={Val}
                        className="photoGridModal"
						alt="White walls with designer chairs"
					/>
				</div>

				<div className="w3-half">
					<img
						src={Val}
                        className="photoGridModal"
						alt="Windows for the atrium"
					/>
					<img
						src={Val}
                        className="photoGridModal"
						alt="Bedroom and office in one space"
					/>
					<img
						src={Val}
                        className="photoGridModal"
						alt="Scandinavian design"
					/>
				</div>
			</div>

			<div className="w3-container" id="designers">
				<h1 className="w3-xxxlarge w3-text-blue"><b>Profile</b></h1>
				<p>The best team in the world.</p>
				<p>
					
				</p>
				<p><b>Our designers are thoughtfully chosen</b>:</p>
			</div>

			{/*<!-- The Team -->*/}

		</div>
    );
}

export default PageContent;
