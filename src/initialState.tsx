export const initialState = {
	poolName: null,
	loanNumber: null,
	orderId: null,
	valuationDate: null,
	subjectProperty: null,
	retail: null,
	distressed: null,
	avmValueDefined: null,
	annualPriceAppreciation: null,
	marketStrength: null,
	propertyCharacteristics: null,
	propertyNeighborhoodInfo: null,
	propertyFeatures: null,
	subjectPropertyTransactions: null,
	propertyValueTrend: null,
	subjectPropertyTransaction1: null,
	subjectPropertyTransaction2: null,
	subjectPropertyTransaction3: null,
	marketAtAGlance: null,
	nearbyProperties: null,
	featuredProperties: null,
	numberOfTransactions: null,
	avgPrices: null,
	medianPrices: null,
	ageOfProperties: null,
	saleToListRatio: null,
	avgListingPrice: null,
	listedPriceRangeByDom: null,
	inventory: null,
	listedInventoryByDom: null,
	avgDom: null,
	retailVsDistressedSales: null,
	retailVsDistressedSalesData: null,
	neighborhoodSummary: null,
	marketAverages: null,
	neighborhoodSummaryData: null,
	level1Averages: null,
	level2Averages: null,
	familyMakeupDescription: null,
	familyMakeup: null,
	education: null,
	ageOfPopulation: null,
	incomeOfPopulation: null,
	incomeOfPopulationData: null,
	footer: null
}

export interface DataInterface {
	poolName: string | null
	loanNumber: string | null
	orderId: string | null
	valuationDate: string | null
	subjectProperty: {
		propertyAddress: string | null
		propertyCity: string | null
		propertyState: string | null
		propertyZip: string | null
		yearBuilt: number | null
		dwellingType: string | null
		imagePath: string | null
		beds: number | null
		bath: number | null
		sqFt: number | null
		garage: number | null
		lotSize: number | null
		lat: number | null
		lng: number | null
	} | null
	retail: {
		price: number | null
		indicator: string | null
		pricePerSqft: number | null
		pricePerSqftIndicator: string | null
		confidenceScore: number | null
		level1Label: string | null
		level1Value: number | null
		level2Label: string | null
		level2Value: number | null
		percentSales: number | null
	} | null
	distressed: {
		price: number | null
		indicator: string | null
		pricePerSqft: number | null
		pricePerSqftIndicator: string | null
		confidenceScore: number | null
		level1Label: string | null
		level1Value: number | null
		level2Label: string | null
		level2Value: number | null
		percentSales: number | null
	} | null
	avmValueDefined: null
	annualPriceAppreciation: {
		level1Label: string | null
		level1Indicator: string | null
		level1Trend: number | null
		level1Value: number | null
		level2Label: string | null
		level2Indicator: string | null
		level2Trend: number | null
		level2Value: number | null
	} | null
	marketStrength: number | null
	propertyCharacteristics: {
		source1: {
			label: string | null
			beds: number | null
			baths: number | null
			sqFt: number | null
			age: number | null
			garage: number | null
			bedsPercent: number | null
			bathsPercent: number | null
			sqFtPercent: number | null
			agePercent: number | null
			garagePercent: number | null
		} | null
		source2: {
			label: string | null
			beds: number | null
			baths: number | null
			sqFt: number | null
			age: number | null
			garage: number | null
		} | null
		source3: {
			label: string | null
			beds: number | null
			baths: number | null
			sqFt: number | null
			age: number | null
			garage: number | null
		} | null
		other1Value: {
			beds: number | null
			baths: number | null
			garage: number | null
			bedsPercent: number | null
			bathsPercent: number | null
			sqFtPercent: number | null
			agePercent: number | null
			garagePercent: number | null
		} | null
		other2Value: {
			beds: number | null
			baths: number | null
			garage: number | null
			bedsPercent: number | null
			bathsPercent: number | null
			sqFtPercent: number | null
			agePercent: number | null
			garagePercent: number | null
		} | null
		atAGlance: string | null
		sqFt: {
			leftBar: string | null
			middleBar: string | null
			rightBar: string | null
		} | null
		age: {
			leftBar: string | null
			middleBar: string | null
			rightBar: string | null
		} | null
		bedsBathGarage: string | null
	} | null
	propertyNeighborhoodInfo: {
		level1: {
			label: string | null
			geoJSON: string | null
		} | null
		level2: {
			label: string | null
			geoJSON: string | null
		} | null
		subdivision: string | null
		taxes: null
		taxParcelId: string | null
		taxYear: null
		zoning: null
		township: string | null
		section: string | null
		assessedValue: string | null
		mortageBank1: {
			name: string | null
			amount: string | null
		} | null
		mortageBank2: {
			name: null
			amount: null
		} | null
		hoa: string | null
		fees: string | null
		contact: null
		phone: string | null
		femaDesasterList: string | null
		floodZone: string | null
	} | null
	propertyFeatures: {
		interiorFeatures: string | null
		exteriorFeatures: string | null
		pool: string | null
		patioDeck: string | null
		roofing: string | null
		exterior: string | null
		cooling: string | null
		heating: string | null
		garageCarport: string | null
		water: string | null
		sewer: string | null
		flooring: string | null
		basementFinished: string | null
	} | null
	subjectPropertyTransactions: string | null
	propertyValueTrend: {
		averagePrice: string | null
		medianPriceLevel1: {
			label: string | null
			data: string | null
		} | null
		medianPriceLevel2: {
			label: string | null
			data: string | null
		} | null
		hpi: string | null
	} | null
	subjectPropertyTransaction1: {
		listingStartDate: string | null
		listingEndDate: string | null
		heroImage: string | null
		mlsName: string | null
		mlsComments: string | null
		photos: string | null
	} | null
	subjectPropertyTransaction2: {
		listingStartDate: string | null
		listingEndDate: string | null
		heroImage: string | null
		mlsName: string | null
		mlsComments: string | null
		photos: string | null
	} | null
	subjectPropertyTransaction3: {
		listingStartDate: string | null
		listingEndDate: string | null
		heroImage: string | null
		mlsName: string | null
		mlsComments: string | null
		photos: string | null
	} | null
	marketAtAGlance: string | null
	nearbyProperties: string | null
	featuredProperties: string | null
	numberOfTransactions: {
		duration: string | null
		label: string | null
		retail: string | null
		distressed: string | null
		rental: string | null
		flipSale: string | null
		flipRental: string | null
	} | null
	avgPrices: {
		rental: {
			avgRent: string | null
			avgDom: string | null
		} | null
		retailSales: {
			medianSalePrice: string | null
			avgDom: string | null
		} | null
		distressedSales: {
			medianSalePrice: string | null
			distressedDiscount: string | null
		} | null
		flipSales: {
			saleRange1: string | null
			saleRange2: string | null
			grossProfitRange1: string | null
			grossProfitRange2: string | null
		} | null
		flipRental: {
			avgRent: string | null
			rentRange1: string | null
			rentRange2: string | null
		} | null
	} | null
	medianPrices: {
		atAGlance: string | null
		level1Label: string | null
		level1Sold: string | null
		level1Listed: string | null
		level2Label: string | null
		level2Sold: string | null
		level2Listed: string | null
	} | null
	ageOfProperties: string | null
	saleToListRatio: {
		level1Label: string | null
		level2Label: string | null
		data: string | null
	} | null
	avgListingPrice: {
		description: string | null
		level1Label: string | null
		level1PriorMonth: string | null
		level1PriorYear: string | null
		level2Label: string | null
		level2PriorMonth: string | null
		level2PriorYear: string | null
		level3Label: string | null
		level3PriorMonth: string | null
		level3PriorYear: string | null
	} | null
	listedPriceRangeByDom: string | null
	inventory: {
		description: string | null
		level1Label: string | null
		level1PriorMonth: string | null
		level1PriorYear: string | null
		level2Label: string | null
		level2PriorMonth: string | null
		level2PriorYear: string | null
		level3Label: string | null
		level3PriorMonth: string | null
		level3PriorYear: string | null
	} | null
	listedInventoryByDom: string | null
	avgDom: string | null
	retailVsDistressedSales: {
		description: string | null
		level1Label: string | null
		level1PriorMonth: string | null
		level1PriorYear: string | null
		level2Label: string | null
		level2PriorMonth: string | null
		level2PriorYear: string | null
		level3Label: string | null
		level3PriorMonth: string | null
		level3PriorYear: string | null
	} | null
	retailVsDistressedSalesData: string | null
	neighborhoodSummary: string | null
	marketAverages: {
		description: string | null
		schoolRatings: {
			elementary: string | null
			middle: string | null
			high: string | null
		} | null
		transitScores: {
			massTransit: string | null
			auto: string | null
			bike: string | null
		} | null
	} | null
	neighborhoodSummaryData: {
		level1GeoJSON: {
			type: string | null
			coordinates: string | null
		} | null
		level2GeoJSON: {
			type: string | null
			coordinates: string | null
		} | null
	} | null
	level1Averages: {
		label: string | null
		avgSchoolRating: string | null
		avgSchoolDelta: string | null
		avgSchoolIndicator: string | null
		avgTransitRating: string | null
		avgTransitDelta: string | null
		avgTransitIndicator: string | null
		avgCrimeRating: string | null
		avgCrimeDelta: string | null
		avgCrimeIndicator: string | null
	} | null
	level2Averages: {
		label: string | null
		avgSchoolRating: string | null
		avgSchoolDelta: string | null
		avgSchoolIndicator: string | null
		avgTransitRating: string | null
		avgTransitDelta: string | null
		avgTransitIndicator: string | null
		avgCrimeRating: string | null
		avgCrimeDelta: string | null
		avgCrimeIndicator: string | null
	} | null
	familyMakeupDescription: string | null
	familyMakeup: string | null
	education: {
		highSchool: string | null
		college: string | null
		grad: string | null
	} | null
	ageOfPopulation: {
		label: string | null
		data: string | null
	} | null
	incomeOfPopulation: {
		level1Label: string | null
		level2Label: string | null
		level3Label: string | null
	} | null
	incomeOfPopulationData: string | null
	footer: string | null
}
