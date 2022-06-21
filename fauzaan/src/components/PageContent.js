import React from "react";
import Val from "./images/Val.png";

function PageContent() {
    return (
		<div className="w3-main" id="pagecontenttop">
			{/*<!-- Header -->*/}
			<div className="w3-container" id="showcase">
				<h1 className="w3-jumbo"><b>Hii</b></h1>
				<h1 className="w3-xxxlarge w3-text-red"><b>Projects.</b></h1>
			</div>

			{/*<!-- Photo grid (modal) -->*/}
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
				<h1 className="w3-xxxlarge w3-text-red"><b>Services.</b></h1>
				<p>
					We are a interior design service that focus on what's best for your
					home and what's best for you!
				</p>
				<p>
					Some text about our services - what we do and what we offer. We are
					lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
					ea commodo consequat.
				</p>
			</div>

			{/*<!-- Designers -->*/}
			<div className="w3-container" id="designers">
				<h1 className="w3-xxxlarge w3-text-red"><b>Designers.</b></h1>
				<p>The best team in the world.</p>
				<p>
					We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p><b>Our designers are thoughtfully chosen</b>:</p>
			</div>

			{/*<!-- The Team -->*/}
			

			{/*!-- Packages / Pricing Tables -->*/}
			<div className="w3-container" id="packages">
				<h1 className="w3-xxxlarge w3-text-red"><b>Packages.</b></h1>
				<p>
					Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure
				</p>
			</div>

			<div className="w3-row-padding">
				<div className="w3-half w3-margin-bottom">
					<ul className="w3-ul w3-light-grey w3-center">
						<li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
						<li className="w3-padding-16">Floorplanning</li>
						<li className="w3-padding-16">10 hours support</li>
						<li className="w3-padding-16">Photography</li>
						<li className="w3-padding-16">20% furniture discount</li>
						<li className="w3-padding-16">Good deals</li>
						<li className="w3-light-grey w3-padding-24">
							<button
								className="w3-button w3-white w3-padding-large w3-hover-black"
							>
								Sign Up
							</button>
						</li>
					</ul>
				</div>

				<div className="w3-half">
					<ul className="w3-ul w3-light-grey w3-center">
						<li className="w3-red w3-xlarge w3-padding-32">Pro</li>
						<li className="w3-padding-16">Floorplanning</li>
						<li className="w3-padding-16">50 hours support</li>
						<li className="w3-padding-16">Photography</li>
						<li className="w3-padding-16">50% furniture discount</li>
						<li className="w3-padding-16">GREAT deals</li>
						<li className="w3-light-grey w3-padding-24">
							<button className="w3-button w3-red w3-padding-large w3-hover-black">
								Sign Up
							</button>
						</li>
					</ul>
				</div>
			</div>

			
			{/* <!-- End page content --> */}
		</div>
    );
}

export default PageContent;
