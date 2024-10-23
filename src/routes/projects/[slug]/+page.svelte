<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { marked } from 'marked';
  import { lang } from '$lib/stores';
  import { formatDate, getImageFromApi } from '$lib/utils';

  /** @type {import('./$types').PageData} */
  export let data;

  $: url = data.slug;
  let mapping = { 'en': 'en-US', 'ru': 'ru-RU' };
  let contentDiv; // Declare a variable to bind

  function setImageStyles() {
    const images = contentDiv.querySelectorAll('.local-content img');
    images.forEach(img => {
      img.style.width = '100%';
      img.style.margin = '0';
      img.style.height = 'auto';
      img.style.border = '2px solid #ccc';
    });
  }

  onMount(() => {
    if (contentDiv) {
      setImageStyles();
      setTimeout(() => {
      contentDiv.style.opacity = '1.0';
    }, 0);
    }
    console.log("on mount");
  });
	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />
{#each data.events.data as event}
  {#if event.url === url}
    {#each data.eventsTranslations.data as et}
      {#if et.events_id == event.id}
        {#if et.languages_code == mapping[$lang]}
          <div class="event">
            <div class="event-detail flex-1">
              <div class="title-wrapper">
                <p class="title"><b>{et.title}</b></p>
              </div>
            </div>
            <div class="local-content" bind:this={contentDiv}>
              {@html marked(et.content)}
            </div>
            <div class="event-detail">
              <img class="main-image" src={getImageFromApi(event.main_image, innerWidth)} alt={et.title} />
            </div>
            <div class="event-detail">
              <p class="date">{formatDate(event.date)}</p>
            </div>
          </div>
        {/if}
      {/if}
    {/each}
  {/if}
{/each}

<style>
  .local-content {
    opacity: 0.0;
    transition: 0.2s ease-out;
    font-size: 1.5em;
    padding: 2em;
  }
  :global(img) {
    transition: 0.2s ease;
  }
  .title {
    padding-left: 1em;
    font-size: calc(2vw + 1em);
  }
  .title-wrapper {
    height: calc(20vh - 1em + 4.5px);
    border-bottom: 3px dashed gray;
    padding: 1em;
    display: flex;
    align-items: flex-end;
  }
  .main-image {
    width: 100%;
    object-fit: cover;
  }
</style>

