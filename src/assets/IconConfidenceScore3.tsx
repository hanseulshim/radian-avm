import React from 'react'

const IconConfidenceScore3 = ({ retail = false }: { retail?: boolean }) => (
	<svg
		width="26px"
		height="29px"
		viewBox="0 0 26 29"
		version="1.1"
		className={`icon confidence-3 ${retail ? 'retail' : ''}`}
	>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Cover" transform="translate(-972.000000, -608.000000)">
				<g id="Group-2" transform="translate(920.000000, 589.000000)">
					<g id="conf_score_blue3" transform="translate(52.000000, 0.757576)">
						<g id="Mask"></g>
						<polygon
							id="Rectangle"
							mask="url(#mask-2)"
							points="78 0.242424242 78 47.2424242 -52 47.2424242"
						></polygon>
					</g>
				</g>
			</g>
		</g>
	</svg>
)

export default IconConfidenceScore3
