import React from 'react'

const IconConfidenceScore5 = ({ retail = false }: { retail?: boolean }) => (
	<svg
		width="26px"
		height="47px"
		viewBox="0 0 26 47"
		version="1.1"
		className={`icon confidence-5 ${retail ? 'retail' : ''}`}
	>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Cover" transform="translate(-1024.000000, -590.000000)">
				<g id="Group-2" transform="translate(920.000000, 589.000000)">
					<g id="conf_score_blue5" transform="translate(104.000000, 0.515152)">
						<g id="Mask"></g>
						<polygon
							id="Rectangle"
							mask="url(#mask-2)"
							points="26 0.484848485 26 47.4848485 -104 47.4848485"
						></polygon>
					</g>
				</g>
			</g>
		</g>
	</svg>
)

export default IconConfidenceScore5
