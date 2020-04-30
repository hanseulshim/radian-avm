import React from 'react'
import Unavailable from 'assets/Unavailable.jpg'
import Bed from 'assets/Bed.svg'
import Bath from 'assets/Bath.svg'
import SqFt from 'assets/SqFt.svg'
import Car from 'assets/Car.svg'
import Acre from 'assets/Acre.svg'
import MapTemp from 'assets/MapTemp.png'

const CoverColumn1 = () => {
	return (
		<div className="column1-container">
			<div className="property-container">
				<div className="top-info">
					<div className="address-container">
						<div className="street">9208 Jones Mill Rd</div>
						<div className="address">Chevy Chase, MD 20815</div>
					</div>
					<div className="info-container">
						<div className="year">1978</div>
						<div className="dwelling">Single Family</div>
					</div>
				</div>
				<div className="bottom-info">
					<div className="info-container">
						<span className="label">Beds</span>
						<span className="icon">
							<img src={Bed} alt="Bed Icon" />
						</span>
						<span className="value">5</span>
					</div>
					<div className="info-container">
						<span className="label">Bath</span>
						<span className="icon">
							<img src={Bath} alt="Bath Icon" />
						</span>
						<span className="value">4.5</span>
					</div>
					<div className="info-container">
						<span className="label">SqFt</span>
						<span className="icon">
							<img src={SqFt} alt="SqFt Icon" />
						</span>
						<span className="value">6300</span>
					</div>
					<div className="info-container">
						<span className="label">Garage Spots</span>
						<span className="icon">
							<img src={Car} alt="Car Icon" />
						</span>
						<span className="value">5</span>
					</div>
					<div className="info-container">
						<span className="label">Acre Lot Size</span>
						<span className="icon">
							<img src={Acre} alt="Acre Icon" />
						</span>
						<span className="value">.333</span>
					</div>
				</div>

				<img alt="Property Information" src={Unavailable} />
			</div>
			<div className="avm-value-defined-container">
				<div className="section-title">AVM Value Defined</div>
				<div>
					Our model’s leverage … Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Vivamus suscipit erat non erat pharetra, sit amet
					euismod urna pretium. Nullam ut leo ac est placerat eleifend vitae et
					elit. Aenean euismod elit at purus feugiat blandit. Sed malesuada
					scelerisque leo sit amet vestibulum. Sed mattis aliquet tortor sed
					hendrerit. Nam id rutrum nibh. Nunc sit amet velit pretium, iaculis
					risus at, dignissim diam. Sed a odio ac sem porttitor sollicitudin.
				</div>
				<img src={MapTemp} alt="map temp" />
			</div>
		</div>
	)
}

export default CoverColumn1
