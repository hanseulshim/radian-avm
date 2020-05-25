import React from 'react'

const IconCircle = ({ className = 'green' }: { className?: string }) => (
	<svg
		width="22px"
		height="22px"
		viewBox="0 0 22 22"
		className={`icon ${className}`}
	>
		<defs>
			<circle id="path-3" cx="1198" cy="269" r="10"></circle>
			<filter
				x="-10.0%"
				y="-5.0%"
				width="120.0%"
				height="120.0%"
				filterUnits="objectBoundingBox"
				id="filter-3"
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
				transform="translate(-1187.000000, -259.000000)"
			>
				<g>
					{className.includes('legend-shadow') && (
						<use
							fill="black"
							fillOpacity="1"
							filter="url(#filter-3)"
							href="#path-3"
							xlinkHref="#path-3"
						/>
					)}
					<circle
						stroke="#FFFFFF"
						strokeWidth="4"
						strokeLinejoin="round"
						id="Cover"
						fillRule="evenodd"
						cx="1198"
						cy="269"
						r="8"
					/>
				</g>
			</g>
		</g>
	</svg>
)

export default IconCircle
