<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { lang } from '$lib/stores';
	import { translationOf } from '$lib/content/api.js';
	export let data;
</script>

{#each data.events.data as event}
	{@const et = data.eventsTranslations.data}
	<a href={'/events/' + event.url}>
		<div class="event">
			<div class="event-detail flex-1">
				<p class="pvh3"><b>{translationOf(event, et, $lang)["title"]}</b></p>
			</div>
			<div class="event-detail flex-2">
				<p class="pvh2">Даня Берковский</p>
			</div>
			<div class="event-detail">
				<p class="pvh2">{formatDate(event.date)}</p>
			</div>
		</div>
	</a>
{/each}

<style>
  a {
    margin: 1rem;
    display: flex;
  }
	.pvh2 {
		font-size: 4vh;
	}
	.pvh3 {
		font-size: 6vh;
	}
	.hvh4 {
		font-size: 8vh;
		font-weight: bold;
	}
	.string-header {
		display: flex;
		align-items: center;
		padding-left: 2em;
		width: 100%;
		height: calc(25vh - 40px);
		border-bottom: 3px black solid;
	}
	.event-big {
		width: 100%;
		height: calc(50vh - 80px);
		border-bottom: 3px black solid;
	}
	.event {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: calc(25vh - 40px);
		border-bottom: 3px black solid;
	}
	.event-detail {
		display: flex;
		align-items: center;
		padding-left: 2em;
		padding-right: 2em;
		justify-items: center;
		text-align: center;
	}
	.event-detail:not(:last-child) {
		border-right: 3px dashed black;
	}
	.image-fit {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
	}
</style>
