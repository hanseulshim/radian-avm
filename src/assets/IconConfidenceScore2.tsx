import React from 'react'

const IconConfidenceScore2 = ({ retail = false }: { retail?: boolean }) => (
	<svg
		width="26px"
		height="19px"
		viewBox="0 0 26 19"
		version="1.1"
		className={`icon confidence-2 ${retail ? 'retail' : ''}`}
	>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Cover" transform="translate(-946.000000, -618.000000)">
				<g id="Group-2" transform="translate(920.000000, 589.000000)">
					<g id="conf_score_blue2" transform="translate(26.000000, 0.515152)">
						<g id="Mask"></g>
						<polygon
							id="Rectangle"
							mask="url(#mask-2)"
							points="104 0.484848485 104 47.4848485 -26 47.4848485"
						></polygon>
					</g>
				</g>
			</g>
		</g>
	</svg>
)

export default IconConfidenceScore2
