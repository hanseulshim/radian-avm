export const initialState = {
	poolName: undefined,
	loanNumber: undefined,
	orderId: undefined,
	valuationDate: undefined,
	subjectProperty: undefined,
	retail: undefined,
	distressed: undefined,
	avmValueDefined: undefined,
	annualPriceAppreciation: undefined,
	marketStrength: undefined,
	footer: undefined
}

export interface DataInterface {
	poolName?: string
	loanNumber?: string
	orderId?: string
	valuationDate?: string
	subjectProperty?: {
		propertyAddress?: string
		propertyCity?: string
		propertyState?: string
		propertyZip?: string
		yearBuilt?: number
		dwellingType?: string
		imagePath?: string
		beds?: number
		bath?: number
		sqFt?: number
		garage?: number
		lotSize?: number
	}
	retail?: {
		price?: number
		indicator?: string
		pricePerSqft?: number
		pricePerSqftIndicator?: string
		confidenceScore?: number
		level1Label?: string
		level1Value?: number
		level2Label?: string
		level2Value?: number
		percentSales?: number
	}
	distressed?: {
		price?: number
		indicator?: string
		pricePerSqft?: number
		pricePerSqftIndicator?: string
		confidenceScore?: number
		level1Label?: string
		level1Value?: number
		level2Label?: string
		level2Value?: number
		percentSales?: number
	}
	avmValueDefined?: {
		lat?: number
		lng?: number
		description?: string
	}
	annualPriceAppreciation?: {
		level1Label?: string
		level1Indicator?: string
		level1Value?: number
		level1Trend?: number
		level2Label?: string
		level2Indicator?: string
		level2Value?: number
		level2Trend?: number
	}
	marketStrength?: number
	footer?: string
}
