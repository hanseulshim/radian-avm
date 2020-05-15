import ConfScoreBlue1 from 'assets/ConfScoreBlue1.svg'
import ConfScoreBlue2 from 'assets/ConfScoreBlue2.svg'
import ConfScoreBlue3 from 'assets/ConfScoreBlue3.svg'
import ConfScoreBlue4 from 'assets/ConfScoreBlue4.svg'
import ConfScoreBlue5 from 'assets/ConfScoreBlue5.svg'
import ConfScoreGreen1 from 'assets/ConfScoreGreen1.svg'
import ConfScoreGreen2 from 'assets/ConfScoreGreen2.svg'
import ConfScoreGreen3 from 'assets/ConfScoreGreen3.svg'
import ConfScoreGreen4 from 'assets/ConfScoreGreen4.svg'
import ConfScoreGreen5 from 'assets/ConfScoreGreen5.svg'
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
				<img
					src={retail ? ConfScoreGreen1 : ConfScoreBlue1}
					alt="conf score 1"
				/>
				{confidenceScore && confidenceScore > 20 && (
					<img
						src={retail ? ConfScoreGreen2 : ConfScoreBlue2}
						alt="conf score 2"
					/>
				)}
				{confidenceScore && confidenceScore > 40 && (
					<img
						src={retail ? ConfScoreGreen3 : ConfScoreBlue3}
						alt="conf score 3"
					/>
				)}
				{confidenceScore && confidenceScore > 60 && (
					<img
						src={retail ? ConfScoreGreen4 : ConfScoreBlue4}
						alt="conf score 4"
					/>
				)}
				{confidenceScore && confidenceScore > 80 && (
					<img
						src={retail ? ConfScoreGreen5 : ConfScoreBlue5}
						alt="conf score 5"
					/>
				)}
			</div>
		</div>
	</div>
)

export default ConfidenceScore
