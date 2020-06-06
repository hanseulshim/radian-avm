export const getWidth = (value?: number | null): string => {
	if (!value) return '0%'
	return `${value}%`
}

export const formatString = (str: string, length: number): string =>
	str.length > length ? `${str.substring(0, length)}...` : str
