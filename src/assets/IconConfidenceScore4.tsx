import React from 'react'

const IconConfidenceScore4 = ({ retail = false }: { retail?: boolean }) => (
	<svg
		width="26px"
		height="38px"
		viewBox="0 0 26 38"
		version="1.1"
		className={`icon confidence-4 ${retail ? 'retail' : ''}`}
	>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Cover" transform="translate(-998.000000, -599.000000)">
				<g id="Group-2" transform="translate(920.000000, 589.000000)">
					<g id="conf_score_blue4" transform="translate(78.000000, 0.757576)">
						<g id="Mask"></g>
						<polygon
							id="Rectangle"
							mask="url(#mask-2)"
							points="52 0.242424242 52 47.2424242 -78 47.2424242"
						></polygon>
					</g>
				</g>
			</g>
		</g>
	</svg>
)

export default IconConfidenceScore4
