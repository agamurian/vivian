<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { lang, theme, white, black } from '$lib/stores';
	import { locale_mapping } from '$lib/content/api.js';
  export let data;
  let mapping = {'en':'en-US','ru':'ru-RU'}
	import { menu } from '$lib/content/common';
	$: border_color = ($theme == 'dark')  ? $white : $black
	$: background_color = ($theme == 'dark')  ? $black : $white
</script>

<div class="header">
	Проекты	
</div>
{#each data.events.data as event}
  {#each data.eventsTranslations.data as et}
    {#if et.events_id == event.id}
      {#if et.languages_code == locale_mapping[$lang]}
<div class="header">
	<a href={'/projects/' + event.url}>
			<div class="event-detail flex-1">
        <p class="pvh3"><b>{et.title}</b></p>
			</div>
			<div class="event-detail flex-2">
        <p class="pvh2">{et.content}</p>
			</div>
			<div class="event-detail">
				<p class="pvh1">{formatDate(event.date)}</p>
			</div>
  </a>
</div>
    {/if}
    {/if}
{/each}
{/each}

<style>
	.header {
		background-color: antiquewhite;
		height: calc(20vh - 1em + 4px);
		border-bottom: 2px dashed;
		padding: 0.5em;
		display: block;
		overflow: hidden;
	}
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
		height: calc(25vh - 40px);
		border-bottom: 3px gray solid;
	}
	.event-big {
		width: 100%;
		height: calc(50vh - 80px);
		border-bottom: 3px gray solid;
	}
	.event {
		display: flex;
		flex-direction: row;
		height: calc(20vh - 1em);
		border-bottom: 3px gray solid;
    width: calc(100vw - 30px);
	}
  .event:hover {
    background: gray;
  }
	.event-detail {
		display: flex;
		max-height: 100%;
	}
	.event-detail:not(:last-child) {
		border-right: 3px dashed gray;
	}
	.image-fit {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
	}
</style>
