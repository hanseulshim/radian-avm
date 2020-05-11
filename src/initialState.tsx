export const initialState = {
	poolName: null,
	loanNumber: null,
	orderID: null,
	valuationDate: null,
	subjectProperty: {
		propertyAddress: null,
		propertyCity: null,
		propertyState: null,
		propertyZip: null,
		yearBuilt: null,
		dwellingType: null,
		imagePath: null,
		beds: null,
		bath: null,
		sqFt: null,
		garage: null,
		lotSize: null
	},
	footer: null
}

export interface DataInterface {
	poolName: string | null
	loanNumber: string | null
	orderID: string | null
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
	}
	footer: string | null
}
