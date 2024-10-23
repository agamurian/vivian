<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { marked } from 'marked';
  import { lang } from '$lib/stores';
  import { formatDate } from '$lib/utils';

  /** @type {import('./$types').PageData} */
  export let data;

  $: url = data.slug;
  let mapping = { 'en': 'en-US', 'ru': 'ru-RU' };
  let contentDiv; // Declare a variable to bind

  function setImageStyles() {
    const images = contentDiv.querySelectorAll('img');
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
</script>

<h1>{url}</h1>
{#each data.events.data as event}
  {#if event.url === url}
    {#each data.eventsTranslations.data as et}
      {#if et.events_id == event.id}
        {#if et.languages_code == mapping[$lang]}
          <div class="event">
            <div class="event-detail flex-1">
              <p class="title"><b>{et.title}</b></p>
            </div>
            <div class="content" bind:this={contentDiv}>
              {@html marked(et.content)}
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
  .content {
    opacity: 0.0;
    transition: 0.2s ease-out;
  }
  :global(img) {
    transition: 0.2s ease;
  }
</style>

