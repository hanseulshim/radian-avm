import React from 'react'

const IconConfidenceScore1 = ({ retail = false }: { retail?: boolean }) => (
	<svg
		width="26px"
		height="10px"
		viewBox="0 0 26 10"
		version="1.1"
		className={`icon confidence-1 ${retail ? 'retail' : ''}`}
	>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Cover" transform="translate(-920.000000, -627.000000)">
				<g id="Group-2" transform="translate(920.000000, 589.000000)">
					<g id="conf_score_blue1" transform="translate(0.000000, 0.757576)">
						<g id="Mask"></g>
						<polygon
							id="Rectangle"
							mask="url(#mask-2)"
							points="130 0.242424242 130 47.2424242 0 47.2424242"
						></polygon>
					</g>
				</g>
			</g>
		</g>
	</svg>
)

export default IconConfidenceScore1
