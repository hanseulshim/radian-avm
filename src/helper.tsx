export const getWidth = (value: number | null): string => {
	if (!value) return '0%'
	return `${value}%`
}
