<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { lang } from '$lib/stores';
	import { translationOf } from '$lib/content/api.js';
  export let data;
  let mapping = {'en':'en-US','ru':'ru-RU'}
</script>

{#each data.events.data as event}
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
{/each}

<style>
  a {
    margin: 0rem;
    display: flex;
  }
	.pvh1 {
    font-size: 2vh;
    text-overflow: ellipsis;
    overflow:hidden;
    max-height: 100%;
    max-width: 30vh;
    padding: 15px;
    padding-left: 20px;
	}
	.pvh2 {
    font-size: 2vh;
    text-overflow: ellipsis;
    overflow:hidden;
    max-height: 100%;
    max-width: 75vw;
    padding:15px;
	}
	.pvh3 {
		font-size: 3vh;
    text-overflow: ellipsis;
    overflow:hidden;
    max-height: 100%;
    max-width: 40vw;
    padding: 15px;
    padding-left: 20px;
	}
	.hvh4 {
		font-size: 8vh;
		font-weight: bold;
	}
	.string-header {
		display: flex;
		align-items: center;
		padding-left: 1em;
		width: 100%;
		height: calc(20vh - 1em);
		border-bottom: 2px gray solid;
	}
	.event-big {
		width: 100%;
		height: calc(40vh - 2em);
		border-bottom: 2px gray solid;
	}
	.event {
		display: flex;
		flex-direction: row;
		height: calc(20vh - 1em);
		border-bottom: 2px gray solid;
    width: calc(100vw - 30px);
	}
  .event:hover {
    background: gray;
  }
	.event-detail {
    display: flex;
	}
	.event-detail:not(:last-child) {
		border-right: 2px dashed gray;
	}
	.image-fit {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
	}
</style>
