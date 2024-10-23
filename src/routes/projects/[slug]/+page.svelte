<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { marked } from 'marked';
  import { lang,contentChanged } from '$lib/stores';
  import { getImageFromApi } from '$lib/utils';

  /** @type {import('./$types').PageData} */
  export let data;

  $: url = data.slug;
  let mapping = { 'en': 'en-US', 'ru': 'ru-RU' };
  let contentDiv; // Declare a variable to bind
  let titleElement; // Declare a variable to bind
  let descriptionElement; // Declare a variable to bind
  let mainImageElement; // Declare a variable to bind

  function setStyles() {
    const images = contentDiv.querySelectorAll('.local-content img');
    images.forEach(img => {
      img.style.width = '100%';
      img.style.margin = '0';
      img.style.height = 'auto';
    });
    const ps = contentDiv.querySelectorAll('.local-content p');
    ps.forEach(p => {
      p.style.margin = '1em';
      p.style.marginTop = '2em';
      p.style.marginBottom = '2em';
    });
  }

  function onContentChanged() {

    setStyles();
    // fade in
      setTimeout(() => {
      titleElement.style.opacity = '1.0';
    }, 0);
      setTimeout(() => {
      descriptionElement.style.opacity = '1.0';
    }, 50);
      setTimeout(() => {
      mainImageElement.style.opacity = '1.0';
    }, 100);
      setTimeout(() => {
      contentDiv.style.opacity = '1.0';
    }, 200);

  }

  let mounted = false
  onMount(() => {
    mounted = true;
  });
	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
  $: {
    $contentChanged;
    if (contentDiv && mounted) {
      onContentChanged();
    }
  }
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />
{#each data.projects.data as project}
  {#if project.url === url}
    {#each data.projectsTranslations.data as et}
      {#if et.projects_id == project.id}
        {#if et.languages_code == mapping[$lang]}
          <div class="project">
            <div class="flex-1">
              <div class="title-wrapper">
                <p class="title" bind:this={titleElement}><b>{et.title}</b></p>
              </div>
            </div>
              <div class="description-wrapper">
                <p class="description" bind:this={descriptionElement}>{et.description}</p>
              </div>
              <img class="main-image" bind:this={mainImageElement} src={getImageFromApi(project.main_image, innerWidth)} alt={et.title} />
            <div class="local-content" bind:this={contentDiv}>
              {@html marked(et.content)}
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
    transition: 0.4s ease-out;
    font-size: 1em;
    padding: 2em;
  }
  .title {
    opacity: 0.0;
    transition: 0.2s ease-out;
    padding-left: 1em;
    font-size: calc(2vw + 1.5em);
  }
  .description {
    opacity: 0.0;
    transition: 0.2s ease-out;
    margin: 4em;
    margin-left: calc(10vw + 4em);
    max-width: 42em;
    font-size: 0.75em;
    line-height: 1.5;
    font-weight: 300;
  }
  .title-wrapper {
    height: calc(20vh - 1em + 4px);
    border-bottom: 3px dashed gray;
    padding: 1em;
    display: flex;
    align-items: flex-end;
  }
  .main-image {
    opacity: 0.0;
    transition: 0.2s ease-out;
    width: 100%;
    object-fit: cover;
  }
</style>

