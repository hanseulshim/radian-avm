import IconConfidenceScore1 from 'assets/IconConfidenceScore1'
import IconConfidenceScore2 from 'assets/IconConfidenceScore2'
import IconConfidenceScore3 from 'assets/IconConfidenceScore3'
import IconConfidenceScore4 from 'assets/IconConfidenceScore4'
import IconConfidenceScore5 from 'assets/IconConfidenceScore5'
import React from 'react'

const ConfidenceScore = ({
	confidenceScore,
	retail
}: {
	confidenceScore?: number
	retail?: boolean
}) => (
	<div className="confidence-score-container">
		<div className="sub-section-title">Confidence Score</div>
		<div className="score-container">
			<div className="label-container">
				<span className="label">
					{confidenceScore &&
						(confidenceScore > 80
							? 'Very High'
							: confidenceScore > 60
							? 'High'
							: confidenceScore > 40
							? 'Medium'
							: confidenceScore > 20
							? 'Low'
							: 'Very Low')}
				</span>
				<span className="value">{confidenceScore}</span>
			</div>
			<div className="image-container">
				<IconConfidenceScore1 retail={retail} />
				{confidenceScore && confidenceScore > 20 && (
					<IconConfidenceScore2 retail={retail} />
				)}
				{confidenceScore && confidenceScore > 40 && (
					<IconConfidenceScore3 retail={retail} />
				)}
				{confidenceScore && confidenceScore > 60 && (
					<IconConfidenceScore4 retail={retail} />
				)}
				{confidenceScore && confidenceScore > 80 && (
					<IconConfidenceScore5 retail={retail} />
				)}
			</div>
		</div>
	</div>
)

export default ConfidenceScore
