<script lang="ts">
	import { marked } from 'marked';
	import { getImageFromApi } from '$lib/utils';
	import { lang } from '$lib/stores';

	export let data;
	const event = data.event.data[0];
</script>

<div class="p-5">
</div>
<img style="align-self: right;" src={getImageFromApi(event.image)} />

<div class="p-10">
</div>
