import React from 'react'

const IconSquare = ({ className = 'green' }: { className?: string }) => (
	<svg
		width="20px"
		height="20px"
		viewBox="0 0 20 20"
		className={`icon ${className}`}
	>
		<defs>
			<rect id="path-2" x="1252" y="259" width="18" height="18"></rect>
			<filter
				x="-11.1%"
				y="-5.6%"
				width="122.2%"
				height="122.2%"
				filterUnits="objectBoundingBox"
				id="filter-2"
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
				transform="translate(-1251.000000, -259.000000)"
			>
				<g>
					{className.includes('legend-shadow') && (
						<use
							fill="black"
							fillOpacity="1"
							filter="url(#filter-2)"
							href="#path-2"
							xlinkHref="#path-2"
						/>
					)}
					<rect
						stroke="#FFFFFF"
						strokeWidth="4"
						strokeLinejoin="round"
						id="Cover"
						fillRule="evenodd"
						x="1254"
						y="261"
						width="14"
						height="14"
					></rect>
				</g>
			</g>
		</g>
	</svg>
)

export default IconSquare
