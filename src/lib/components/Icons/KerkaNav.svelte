<script>
	export let size = 55;
	const ratio = 69 / 80;
	import { lang,theme,white,black } from '$lib/stores';
</script>

<svg
	width={size}
	height={size * ratio}
	viewBox="0 0 80 69"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M80 1.43689V22.6933L0 69V51.9208V49.928V48.2674V47.271V46.2746L79.9445 0L80 1.43689Z"
  fill="{($theme == 'dark')  ? $white : $black}"
	/>
</svg>
