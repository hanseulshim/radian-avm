import React from 'react'

const IconTriangle = ({ className = 'green' }: { className?: string }) => (
	<svg
		width="23px"
		height="23px"
		viewBox="0 0 23 23"
		className={`icon ${className}`}
	>
		<defs>
			<polygon id="path-1" points="1321.5 256 1332 277 1311 277"></polygon>
			<filter
				x="-9.5%"
				y="-4.8%"
				width="119.0%"
				height="119.0%"
				filterUnits="objectBoundingBox"
				id="filter-1"
			>
				<feOffset
					dx="0"
					dy="1"
					in="SourceAlpha"
					result="shadowOffsetOuter1"
				></feOffset>
				<feGaussianBlur
					stdDeviation="0.5"
					in="shadowOffsetOuter1"
					result="shadowBlurOuter1"
				></feGaussianBlur>
				<feComposite
					in="shadowBlurOuter1"
					in2="SourceAlpha"
					operator="out"
					result="shadowBlurOuter1"
				></feComposite>
				<feColorMatrix
					values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0"
					type="matrix"
					in="shadowBlurOuter1"
				></feColorMatrix>
			</filter>
		</defs>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				id="09-Market-Summary"
				transform="translate(-1310.000000, -256.000000)"
			>
				<g>
					{className.includes('legend-shadow') && (
						<use
							fill="black"
							fillOpacity="1"
							filter="url(#filter-1)"
							href="#path-1"
						/>
					)}
					<path
						stroke="#FFFFFF"
						strokeWidth="3"
						d="M1321.5,259.354102 L1313.42705,275.5 L1329.57295,275.5 L1321.5,259.354102 Z"
						strokeLinejoin="round"
						id="Cover"
						fillRule="evenodd"
					></path>
				</g>
			</g>
		</g>
	</svg>
)

export default IconTriangle
