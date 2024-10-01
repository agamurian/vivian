<script lang="ts">
	import { marked } from 'marked';
	import { getImageFromApi } from '$lib/utils';
	import { lang } from '$lib/stores';
	import { formatDate } from '$lib/utils';
  /** @type {import('./$types').PageData} */
  export let data;
  import {page} from '$app/stores'
  //import {findProjectByURL} from '$lib/utils'
  $: url = data.slug
	//$: title = findProjectByURL(url).title
  let mapping = {'en':'en-US','ru':'ru-RU'}
</script>


{data.slug}
<h1>{url}</h1>
{#each data.events.data as event}
  {#if event.url === url}
  {#each data.eventsTranslations.data as et}
    {#if et.events_id == event.id}
      {#if et.languages_code == mapping[$lang]}
	<a href={'/projects/' + event.url}>
		<div class="event">
			<div class="event-detail flex-1">
        <p class="pvh3"><b>{et.title}</b></p>
			</div>
			<div class="event-detail flex-2">
        <p class="pvh2">{et.content}</p>
			</div>
			<div class="event-detail">
				<p class="pvh1">{formatDate(event.date)}</p>
			</div>
		</div>
  </a>
    {/if}
    {/if}
{/each}
    {/if}
{/each}
