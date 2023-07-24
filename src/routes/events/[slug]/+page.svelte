<script lang="ts">
	import { marked } from 'marked';
	import { getImageFromApi } from '$lib/utils';
	import { lang } from '$lib/stores';
	import { translationOf } from '$lib/content/api.js';

	export let data;
	const event = data.event.data[0];
	const et = data.eventsTranslations.data;
	$: translation = translationOf(event, et, $lang);
</script>

<div class="p-5">
	<h1>{translation.title}</h1>
</div>
<img style="align-self: right;" src={getImageFromApi(event.image)} />

<div class="p-10">
	{@html marked(translation.content)}
</div>
