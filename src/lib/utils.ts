const apiRoot = 'https://admin.viviandelrio.com';

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

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
