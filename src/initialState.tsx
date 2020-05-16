export const initialState = {
	poolName: undefined,
	loanNumber: undefined,
	orderId: undefined,
	valuationDate: undefined,
	subjectProperty: {
		propertyAddress: undefined,
		propertyCity: undefined,
		propertyState: undefined,
		propertyZip: undefined,
		yearBuilt: undefined,
		dwellingType: undefined,
		imagePath: undefined,
		beds: undefined,
		bath: undefined,
		sqFt: undefined,
		garage: undefined,
		lotSize: undefined,
		lat: undefined,
		lng: undefined
	},
	retail: {
		price: undefined,
		indicator: undefined,
		pricePerSqft: undefined,
		pricePerSqftIndicator: undefined,
		confidenceScore: undefined,
		level1Label: undefined,
		level1Value: undefined,
		level2Label: undefined,
		level2Value: undefined,
		percentSales: undefined
	},
	distressed: {
		price: undefined,
		indicator: undefined,
		pricePerSqft: undefined,
		pricePerSqftIndicator: undefined,
		confidenceScore: undefined,
		level1Label: undefined,
		level1Value: undefined,
		level2Label: undefined,
		level2Value: undefined,
		percentSales: undefined
	},
	avmValueDefined: null,
	annualPriceAppreciation: {
		level1Label: undefined,
		level1Indicator: undefined,
		level1Trend: undefined,
		level1Value: undefined,
		level2Label: undefined,
		level2Indicator: undefined,
		level2Trend: undefined,
		level2Value: undefined
	},
	marketStrength: undefined,
	propertyCharacteristics: {
		source1: {
			label: undefined,
			beds: undefined,
			baths: undefined,
			sqFt: undefined,
			age: undefined,
			garage: undefined,
			bedsPercent: undefined,
			bathsPercent: undefined,
			sqFtPercent: undefined,
			agePercent: undefined,
			garagePercent: undefined
		},
		source2: {
			label: undefined,
			beds: undefined,
			baths: undefined,
			sqFt: undefined,
			age: undefined,
			garage: undefined
		},
		source3: {
			label: undefined,
			beds: undefined,
			baths: undefined,
			sqFt: undefined,
			age: undefined,
			garage: undefined
		},
		other1Value: {
			beds: undefined,
			baths: undefined,
			garage: undefined,
			bedsPercent: undefined,
			bathsPercent: undefined,
			sqFtPercent: undefined,
			agePercent: undefined,
			garagePercent: undefined
		},
		other2Value: {
			beds: undefined,
			baths: undefined,
			garage: undefined,
			bedsPercent: undefined,
			bathsPercent: undefined,
			sqFtPercent: undefined,
			agePercent: undefined,
			garagePercent: undefined
		},
		atAGlance: undefined,
		sqFt: {
			leftBar: undefined,
			middleBar: undefined,
			rightBar: undefined
		},
		age: {
			leftBar: undefined,
			middleBar: undefined,
			rightBar: undefined
		},
		bedsBathGarage: undefined
	},
	propertyNeighborhoodInfo: {
		level1: {
			label: undefined,
			geoJSON: undefined
		},
		level2: {
			label: undefined,
			geoJSON: undefined
		},
		subdivision: undefined,
		taxes: null,
		taxParcelId: undefined,
		taxYear: null,
		zoning: null,
		township: undefined,
		section: undefined,
		assessedValue: undefined,
		mortageBank1: {
			name: undefined,
			amount: undefined
		},
		mortageBank2: {
			name: null,
			amount: null
		},
		hoa: undefined,
		fees: undefined,
		contact: null,
		phone: undefined,
		femaDesasterList: undefined,
		floodZone: undefined
	},
	propertyFeatures: {
		interiorFeatures: undefined,
		exteriorFeatures: undefined,
		pool: undefined,
		patioDeck: undefined,
		roofing: undefined,
		exterior: undefined,
		cooling: undefined,
		heating: undefined,
		garageCarport: undefined,
		water: undefined,
		sewer: undefined,
		flooring: undefined,
		basementFinished: undefined
	},
	subjectPropertyTransactions: undefined,
	propertyValueTrend: {
		averagePrice: undefined,
		medianPriceLevel1: {
			label: undefined,
			data: undefined
		},
		medianPriceLevel2: {
			label: undefined,
			data: undefined
		},
		hpi: undefined
	},
	subjectPropertyTransaction1: {
		listingStartDate: undefined,
		listingEndDate: undefined,
		heroImage: undefined,
		mlsName: undefined,
		mlsComments: undefined,
		photos: undefined
	},
	subjectPropertyTransaction2: {
		listingStartDate: undefined,
		listingEndDate: undefined,
		heroImage: undefined,
		mlsName: undefined,
		mlsComments: undefined,
		photos: undefined
	},
	subjectPropertyTransaction3: {
		listingStartDate: undefined,
		listingEndDate: undefined,
		heroImage: undefined,
		mlsName: undefined,
		mlsComments: undefined,
		photos: undefined
	},
	marketAtAGlance: undefined,
	nearbyProperties: undefined,
	featuredProperties: undefined,
	numberOfTransactions: {
		duration: undefined,
		label: undefined,
		retail: undefined,
		distressed: undefined,
		rental: undefined,
		flipSale: undefined,
		flipRental: undefined
	},
	avgPrices: {
		rental: {
			avgRent: undefined,
			avgDom: undefined
		},
		retailSales: {
			medianSalePrice: undefined,
			avgDom: undefined
		},
		distressedSales: {
			medianSalePrice: undefined,
			distressedDiscount: undefined
		},
		flipSales: {
			saleRange1: undefined,
			saleRange2: undefined,
			grossProfitRange1: undefined,
			grossProfitRange2: undefined
		},
		flipRental: {
			avgRent: undefined,
			rentRange1: undefined,
			rentRange2: undefined
		}
	},
	medianPrices: {
		atAGlance: undefined,
		level1Label: undefined,
		level1Sold: undefined,
		level1Listed: undefined,
		level2Label: undefined,
		level2Sold: undefined,
		level2Listed: undefined
	},
	ageOfProperties: undefined,
	saleToListRatio: {
		level1Label: undefined,
		level2Label: undefined,
		data: undefined
	},
	avgListingPrice: {
		description: undefined,
		level1Label: undefined,
		level1PriorMonth: undefined,
		level1PriorYear: undefined,
		level2Label: undefined,
		level2PriorMonth: undefined,
		level2PriorYear: undefined,
		level3Label: undefined,
		level3PriorMonth: undefined,
		level3PriorYear: undefined
	},
	listedPriceRangeByDom: undefined,
	inventory: {
		description: undefined,
		level1Label: undefined,
		level1PriorMonth: undefined,
		level1PriorYear: undefined,
		level2Label: undefined,
		level2PriorMonth: undefined,
		level2PriorYear: undefined,
		level3Label: undefined,
		level3PriorMonth: undefined,
		level3PriorYear: undefined
	},
	listedInventoryByDom: undefined,
	avgDom: undefined,
	retailVsDistressedSales: {
		description: undefined,
		level1Label: undefined,
		level1PriorMonth: undefined,
		level1PriorYear: undefined,
		level2Label: undefined,
		level2PriorMonth: undefined,
		level2PriorYear: undefined,
		level3Label: undefined,
		level3PriorMonth: undefined,
		level3PriorYear: undefined
	},
	retailVsDistressedSalesData: undefined,
	neighborhoodSummary: undefined,
	marketAverages: {
		description: undefined,
		schoolRatings: {
			elementary: undefined,
			middle: undefined,
			high: undefined
		},
		transitScores: {
			massTransit: undefined,
			auto: undefined,
			bike: undefined
		}
	},
	neighborhoodSummaryData: {
		level1GeoJSON: {
			type: undefined,
			coordinates: undefined
		},
		level2GeoJSON: {
			type: undefined,
			coordinates: undefined
		}
	},
	level1Averages: {
		label: undefined,
		avgSchoolRating: undefined,
		avgSchoolDelta: undefined,
		avgSchoolIndicator: undefined,
		avgTransitRating: undefined,
		avgTransitDelta: undefined,
		avgTransitIndicator: undefined,
		avgCrimeRating: undefined,
		avgCrimeDelta: undefined,
		avgCrimeIndicator: undefined
	},
	level2Averages: {
		label: undefined,
		avgSchoolRating: undefined,
		avgSchoolDelta: undefined,
		avgSchoolIndicator: undefined,
		avgTransitRating: undefined,
		avgTransitDelta: undefined,
		avgTransitIndicator: undefined,
		avgCrimeRating: undefined,
		avgCrimeDelta: undefined,
		avgCrimeIndicator: undefined
	},
	familyMakeupDescription: undefined,
	familyMakeup: undefined,
	education: {
		highSchool: undefined,
		college: undefined,
		grad: undefined
	},
	ageOfPopulation: {
		label: undefined,
		data: undefined
	},
	incomeOfPopulation: {
		level1Label: undefined,
		level2Label: undefined,
		level3Label: undefined
	},
	incomeOfPopulationData: undefined,
	footer: undefined
}

export interface DataInterface {
	poolName?: string
	loanNumber?: string
	orderId?: string
	valuationDate?: string
	subjectProperty: {
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
		lat?: number
		lng?: number
	}
	retail: {
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
	distressed: {
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
	avmValueDefined: null
	annualPriceAppreciation: {
		level1Label?: string
		level1Indicator?: string
		level1Trend?: number
		level1Value?: number
		level2Label?: string
		level2Indicator?: string
		level2Trend?: number
		level2Value?: number
	}
	marketStrength?: number
	propertyCharacteristics: {
		source1: {
			label?: string
			beds?: number
			baths?: number
			sqFt?: number
			age?: number
			garage?: number
			bedsPercent?: number
			bathsPercent?: number
			sqFtPercent?: number
			agePercent?: number
			garagePercent?: number
		}
		source2: {
			label?: string
			beds?: number
			baths?: number
			sqFt?: number
			age?: number
			garage?: number
		}
		source3: {
			label?: string
			beds?: number
			baths?: number
			sqFt?: number
			age?: number
			garage?: number
		}
		other1Value: {
			beds?: number
			baths?: number
			garage?: number
			bedsPercent?: number
			bathsPercent?: number
			sqFtPercent?: number
			agePercent?: number
			garagePercent?: number
		}
		other2Value: {
			beds?: number
			baths?: number
			garage?: number
			bedsPercent?: number
			bathsPercent?: number
			sqFtPercent?: number
			agePercent?: number
			garagePercent?: number
		}
		atAGlance?: string
		sqFt: {
			leftBar?: string
			middleBar?: string
			rightBar?: string
		}
		age: {
			leftBar?: string
			middleBar?: string
			rightBar?: string
		}
		bedsBathGarage?: string
	}
	propertyNeighborhoodInfo: {
		level1: {
			label?: string
			geoJSON?: string
		}
		level2: {
			label?: string
			geoJSON?: string
		}
		subdivision?: string
		taxes: null
		taxParcelId?: string
		taxYear: null
		zoning: null
		township?: string
		section?: string
		assessedValue?: string
		mortageBank1: {
			name?: string
			amount?: string
		}
		mortageBank2: {
			name: null
			amount: null
		}
		hoa?: string
		fees?: string
		contact: null
		phone?: string
		femaDesasterList?: string
		floodZone?: string
	}
	propertyFeatures: {
		interiorFeatures?: string
		exteriorFeatures?: string
		pool?: string
		patioDeck?: string
		roofing?: string
		exterior?: string
		cooling?: string
		heating?: string
		garageCarport?: string
		water?: string
		sewer?: string
		flooring?: string
		basementFinished?: string
	}
	subjectPropertyTransactions?: string
	propertyValueTrend: {
		averagePrice?: string
		medianPriceLevel1: {
			label?: string
			data?: string
		}
		medianPriceLevel2: {
			label?: string
			data?: string
		}
		hpi?: string
	}
	subjectPropertyTransaction1: {
		listingStartDate?: string
		listingEndDate?: string
		heroImage?: string
		mlsName?: string
		mlsComments?: string
		photos?: string
	}
	subjectPropertyTransaction2: {
		listingStartDate?: string
		listingEndDate?: string
		heroImage?: string
		mlsName?: string
		mlsComments?: string
		photos?: string
	}
	subjectPropertyTransaction3: {
		listingStartDate?: string
		listingEndDate?: string
		heroImage?: string
		mlsName?: string
		mlsComments?: string
		photos?: string
	}
	marketAtAGlance?: string
	nearbyProperties?: string
	featuredProperties?: string
	numberOfTransactions: {
		duration?: string
		label?: string
		retail?: string
		distressed?: string
		rental?: string
		flipSale?: string
		flipRental?: string
	}
	avgPrices: {
		rental: {
			avgRent?: string
			avgDom?: string
		}
		retailSales: {
			medianSalePrice?: string
			avgDom?: string
		}
		distressedSales: {
			medianSalePrice?: string
			distressedDiscount?: string
		}
		flipSales: {
			saleRange1?: string
			saleRange2?: string
			grossProfitRange1?: string
			grossProfitRange2?: string
		}
		flipRental: {
			avgRent?: string
			rentRange1?: string
			rentRange2?: string
		}
	}
	medianPrices: {
		atAGlance?: string
		level1Label?: string
		level1Sold?: string
		level1Listed?: string
		level2Label?: string
		level2Sold?: string
		level2Listed?: string
	}
	ageOfProperties?: string
	saleToListRatio: {
		level1Label?: string
		level2Label?: string
		data?: string
	}
	avgListingPrice: {
		description?: string
		level1Label?: string
		level1PriorMonth?: string
		level1PriorYear?: string
		level2Label?: string
		level2PriorMonth?: string
		level2PriorYear?: string
		level3Label?: string
		level3PriorMonth?: string
		level3PriorYear?: string
	}
	listedPriceRangeByDom?: string
	inventory: {
		description?: string
		level1Label?: string
		level1PriorMonth?: string
		level1PriorYear?: string
		level2Label?: string
		level2PriorMonth?: string
		level2PriorYear?: string
		level3Label?: string
		level3PriorMonth?: string
		level3PriorYear?: string
	}
	listedInventoryByDom?: string
	avgDom?: string
	retailVsDistressedSales: {
		description?: string
		level1Label?: string
		level1PriorMonth?: string
		level1PriorYear?: string
		level2Label?: string
		level2PriorMonth?: string
		level2PriorYear?: string
		level3Label?: string
		level3PriorMonth?: string
		level3PriorYear?: string
	}
	retailVsDistressedSalesData?: string
	neighborhoodSummary?: string
	marketAverages: {
		description?: string
		schoolRatings: {
			elementary?: string
			middle?: string
			high?: string
		}
		transitScores: {
			massTransit?: string
			auto?: string
			bike?: string
		}
	}
	neighborhoodSummaryData: {
		level1GeoJSON: {
			type?: string
			coordinates?: string
		}
		level2GeoJSON: {
			type?: string
			coordinates?: string
		}
	}
	level1Averages: {
		label?: string
		avgSchoolRating?: string
		avgSchoolDelta?: string
		avgSchoolIndicator?: string
		avgTransitRating?: string
		avgTransitDelta?: string
		avgTransitIndicator?: string
		avgCrimeRating?: string
		avgCrimeDelta?: string
		avgCrimeIndicator?: string
	}
	level2Averages: {
		label?: string
		avgSchoolRating?: string
		avgSchoolDelta?: string
		avgSchoolIndicator?: string
		avgTransitRating?: string
		avgTransitDelta?: string
		avgTransitIndicator?: string
		avgCrimeRating?: string
		avgCrimeDelta?: string
		avgCrimeIndicator?: string
	}
	familyMakeupDescription?: string
	familyMakeup?: string
	education: {
		highSchool?: string
		college?: string
		grad?: string
	}
	ageOfPopulation: {
		label?: string
		data?: string
	}
	incomeOfPopulation: {
		level1Label?: string
		level2Label?: string
		level3Label?: string
	}
	incomeOfPopulationData?: string
	footer?: string
}
