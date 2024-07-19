<script lang="ts">
	import { theme } from '$lib/stores';
	const changeTheme = () => {
		if ($theme === 'dark') {
			theme.set('light');
		} else if ($theme === 'light') {
			theme.set('dark');
		}
	};
</script>

<button class="m-0 mr-2" on:click={changeTheme}>
  ☾
</button>
