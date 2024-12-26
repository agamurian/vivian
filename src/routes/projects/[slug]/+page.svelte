<script lang="ts">
  import { onMount } from 'svelte';
  import { lang,contentChanged,theme,black,white } from '$lib/stores';
  import { debounce } from '$lib/utils';

  /** @type {import('./$types').PageData} */
  export let data;

  $: url = data.slug;
  let mapping = { 'en': 'en-US', 'ru': 'ru-RU' };
  let contentDiv; // Declare a variable to bind
  let titleElement; // Declare a variable to bind

	$: border_color = ($theme == 'dark')  ? $white : $black
	$: background_color = ($theme == 'dark')  ? $black : $white

	$: outerWidth = 2000
	$: innerWidth = 2000
	$: outerHeight = 2000
	$: innerHeight = 2000
  let sizeReallyChanged = 2000

  const maxImgWidth = 1200

  function getSizedImg(src,width){
    const srcNoQuery = src.split('?')[0]
    const newSrc = srcNoQuery + "?width=" + Math.min(width,maxImgWidth)
    return newSrc 
  }

  // because content is loaded dynamically
  function setStyles() {
    // all content is inside th p
    const ps = contentDiv.querySelectorAll('.local-content p');
    ps.forEach(p => {
      p.style.lineHeight = "1.5";
      p.style.margin = "1em";
      });
    // in content images are inside ps. cancell out the margins
    const images = contentDiv.querySelectorAll('.local-content p > img');
    images.forEach(img => {
      img.style.pointerEvents = "none"; // secure from download
      img.style.width = "100%";
      img.style.marginTop = "2em";
      img.style.marginBottom = "2em";
    });
    const big_images = contentDiv.querySelectorAll('.local-content p strong > img');
    big_images.forEach(img => {
      img.style.pointerEvents = "none"; // secure from download
      img.style.objectFit = "cover";
    });
    const paired_images_wrappers = contentDiv.querySelectorAll('.local-content p em');
    paired_images_wrappers.forEach(el => {
      if(innerWidth > 600){
        el.style.display = "flex";
      }else{
        el.style.display = "block";
      }
      el.style.gap = "2em";
    });
    const paired_images = contentDiv.querySelectorAll('.local-content p em > img');
    paired_images.forEach(img => {
      img.style.pointerEvents = "none"; // secure from download
      if (img)
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.marginTop = "0em";
      img.style.width = "calc(50% - 1em)";
      img.style.display = "inline-block";
    });
  }

  function onContentChanged() {

    setStyles();
    // fade in
      setTimeout(() => {
      titleElement.style.opacity = '1.0';
    
        setTimeout(() => {
        contentDiv.style.opacity = '1.0';

      }, 100);

    }, 50);


  }

  let mounted = false
  onMount(() => {
    mounted = true;
  });
  $: {
    if (contentDiv && mounted) {
      onContentChanged();
    }
  }

  const handleResize = debounce((width: number) => {
    sizeReallyChanged = width;
    console.log("Debounced width:", sizeReallyChanged); // Use this value in your app
  }, 200);

  $: handleResize(innerWidth);

</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />
{#each data.projects.data as project}
  {#if project.url === url}
    {#each data.projectsTranslations.data as et}
      {#if et.projects_id == project.id}
        {#if et.languages_code == mapping[$lang]}
          <div class="project">
            <div class="flex-1">
              <div class="title-wrapper"
          style="border-color: {border_color}"
                >
          <div class="centered-h content-container large">
                <p class="title" bind:this={titleElement}><b>{et.title}</b></p>
              </div>
              </div>
            </div>
            <div class="px-0 md:px-16">
            <div class="local-content" bind:this={contentDiv}>
              {#key mounted}
              {#key sizeReallyChanged}
                  {@html et.content}
              {/key}
              {/key}
            </div>
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
    max-width: 1200px;
    opacity: 0.0;
    transition: 2s ease-out;
    font-size: 1em;
    padding: 3em;
    padding-top: 2em;
    overflow-x: hidden;
    margin: 0;
  }
  .title {
    opacity: 0.0;
    transition: 1s ease-out;
  }
</style>

