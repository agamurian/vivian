const apiRoot = 'https://admin.kerka.gallery';

export function getImageFromApi(hash: string, maxWidth?: number): string {
	return `${apiRoot}/assets/${hash}?width=${maxWidth ?? ''}`;
}

export function formatDate(date: string): string {
	return date.split('T')[0].split('-').join('/');
}

export function formatToHM(time: Date) {
	return time.toLocaleTimeString('en-US', {
		hour12: false,
		hour: 'numeric',
		minute: 'numeric'
	});
}
