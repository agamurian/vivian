<script lang="ts">
  import { onMount } from 'svelte';
  import { lang,contentChanged,theme,black,white } from '$lib/stores';
  import { debounce,yearOfDate } from '$lib/utils';

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
      p.style.fontSize = "0.75em";
      p.style.lineHeight = "1.5";
      p.style.fontWeight = "300";
      p.style.margin = "1em"
      });
    const quote_ps = contentDiv.querySelectorAll('.local-content blockquote > p');
    quote_ps.forEach(p => {
      p.style.margin = "4em";
      p.style.marginLeft = "calc(8em)";
      p.style.maxWidth = "45em"; //-> tag in content
      });
    // in content images are inside ps. cancell out the margins
    const images = contentDiv.querySelectorAll('.local-content p > img');
    images.forEach(img => {
      img.style.pointerEvents = "none"; // secure from download
      img.style.width = "100%";
      img.style.marginTop = "4em";
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
      el.style.gap = "4em";
      el.style.marginTop = "3em";
    });
    const paired_images = contentDiv.querySelectorAll('.local-content p em > img');
    paired_images.forEach(img => {
      img.style.pointerEvents = "none"; // secure from download
      if (img)
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.marginTop = "1em";
      img.style.maxWidth = "calc(100vw - 10em)";
      img.style.display = "block";
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
{#each data.publications.data as publication}
  {#if publication.url === url}
    {#each data.publicationsTranslations.data as et}
      {#if et.publications_id == publication.id}
        {#if et.languages_code == mapping[$lang]}
        <div class="title-wrapper"
          style="
          border-color: {border_color};
          background-color: {background_color};
          "
          >
          <div class="centered-h content-container large">
            <p class="title-dynamic" bind:this={titleElement}>
					  {et.title}
          </p>
          <div class="bottom-line">
            <span class="bottom-line-element date">
              {yearOfDate(publication.date)}
            </span>
            <span class="bottom-line-element description">
              {et.source_name}
            </span>
          </div>
          </div>
        </div>
          <div class="publication">
  <div class="centered-h content-container small">
    <div class="col-wrapper top-wrapper px-0 md:px-16 py-8">
            <div class="" bind:this={contentDiv}>
              {#key mounted}
              {#key sizeReallyChanged}
                  {@html et.content}
              {/key}
              {/key}
            </div>
            </div>
            </div>
          </div>
        {/if}
      {/if}
    {/each}
  {/if}
{/each}

<style>
  .publication {
    overflow-x: hidden;
  }
  .date {
    font-weight: 300;
  }
  .bottom-line {
    margin-top:1em;
    display: flex;
    justify-content: space-between;
  }
  .bottom-line-element {
  }
  .description {
    color: #888;
    right:0;
  }
  .title-dynamic{
    font-size: calc(0.2em + 1vw + 1vh);
  }
</style>

