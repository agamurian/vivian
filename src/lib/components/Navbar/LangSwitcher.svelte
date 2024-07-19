<script lang="ts">
	import { lang } from '$lib/stores';
	const changeLang = () => {
		if ($lang === 'en') {
			lang.set('ru');
		} else if ($lang === 'ru') {
			lang.set('en');
		}
	};
</script>

<button class="m-0 mr-2" on:click={changeLang}>
	{$lang.toUpperCase()}
</button>
