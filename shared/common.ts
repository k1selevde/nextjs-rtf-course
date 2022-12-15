export const pad = (d: number) => {
	return (d < 10) ? '0' + d.toString() : d.toString();
}
