export const getWidth = (value?: number): string => {
	if (!value) return '0%'
	return `${value}%`
}
