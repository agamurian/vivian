<script>
	import { page } from '$app/stores';
	import { theme,white,black } from '$lib/stores';
  export const prerender = false
</script>

<div class="content"
style="color: { ($theme == 'dark' ) ? $white : $black };"
  >
	<slot />
</div>
