<script lang="ts">
  import { onMount } from 'svelte';
  import { lang,contentChanged } from '$lib/stores';

  /** @type {import('./$types').PageData} */
  export let data;

  $: url = data.slug;
  let mapping = { 'en': 'en-US', 'ru': 'ru-RU' };
  let contentDiv; // Declare a variable to bind
  let titleElement; // Declare a variable to bind
  let descriptionElement; // Declare a variable to bind

  // because content is loaded synamically
  function setStyles() {
    // all content is inside th p
    const ps = contentDiv.querySelectorAll('.local-content p');
    ps.forEach(p => {
      p.style.fontSize = "0.75em";
      p.style.lineHeight = "1.5";
      p.style.fontWeight = "300";
      p.style.margin = "1em"
      });
    const quote_ps = contentDiv.querySelectorAll('.local-content blockquote > p');
    quote_ps.forEach(p => {
      p.style.margin = "4em";
      p.style.marginLeft = "calc(10vw + 2em)";
      p.style.maxWidth = "45em"; //-> tag in content
      });
    // in content images are inside ps. cancell out the margins
    const images = contentDiv.querySelectorAll('.local-content p > img');
    images.forEach(img => {
      img.style.width = "100%";
      img.style.marginTop = "4em";
    });
    const big_images = contentDiv.querySelectorAll('.local-content p strong > img');
    big_images.forEach(img => {
      img.style.width = "calc(100vw - 3em + 4px)";
      img.style.maxWidth = "100vw";
      img.style.marginLeft = "-4em";
      img.style.marginBottom = "1em";
    });
  }

  function onContentChanged() {

    setStyles();
    // fade in
      setTimeout(() => {
      titleElement.style.opacity = '1.0';
    }, 0);
      setTimeout(() => {
      contentDiv.style.opacity = '1.0';
    }, 50);

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
            <div class="local-content" bind:this={contentDiv}>
              {@html et.content}
            </div>
          </div>
        {/if}
      {/if}
    {/each}
  {/if}
{/each}

<style>
  .project {
    overflow-x: hidden;
  }
  .local-content {
    opacity: 0.0;
    transition: 0.4s ease-out;
    font-size: 1em;
    padding: 2em;
    padding-top: 0;
  }
  .title {
    opacity: 0.0;
    transition: 0.2s ease-out;
    padding-left: 1em;
    font-size: calc(2vw + 1.5em);
  }
  .title-wrapper {
    height: calc(20vh - 0.5em);
    border-bottom: 2px dashed gray;
    padding: 1em;
    display: flex;
    align-items: flex-end;
  }
</style>

