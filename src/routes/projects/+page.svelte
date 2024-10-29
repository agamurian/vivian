<script lang="ts">
	import { lang, theme, white, black } from '$lib/stores';
	import { locale_mapping } from '$lib/content/api.js';
  import { page } from '$app/stores';
  import { getImageFromApi } from '$lib/utils.ts';
	import { menu } from '$lib/content/common';
  export let data;

  const title = 'Vivian Del Rio'
  let mapping = {'en':'en-US','ru':'ru-RU'}
	$: border_color = ($theme == 'dark')  ? $white : $black
	$: background_color = ($theme == 'dark')  ? $black : $white
</script>

	{#each menu as item}
      {#if item.href == $page.route.id}
        <div class="title-wrapper"
          style="
          border-color: {border_color};
          background-color: {background_color};
          "
          >
				  <p class="title">
					  {item[$lang]}
				  </p>
        </div>
      {/if}
	{/each}
  <div class="projects flex flex-col gap-4">
{#each data.projects.data as project}
  {#each data.projectsTranslations.data as et}
    {#if et.projects_id == project.id}
      {#if et.languages_code == locale_mapping[$lang]}
	<a href={'/projects/' + project.url}>

  <div class="flex flex-col md:flex-row gap-2 md:gap-4 p-2 md:p-4">
    <!-- Left Column (Image) -->
    <div class="w-full md:w-1/2">
        <img src={getImageFromApi(project.main_image)} alt={title[$lang] + ' ' + et.title + ' ' + et.description } class="w-full h-auto object-conver"/>
    </div>

    <!-- Right Column (Text) -->
    <div class="w-full lg:w-1/3 md:w-1/2 flex flex-col justify-between" >
        <!-- Title at the top -->
        <h2 class="text-2xl font-bold mb-2" style="line-height: 1">{et.title}</h2>

        <!-- Description at the bottom -->
        <p class="text-xs leading-relaxed mt-4">
              {et.description}
        </p>
    </div>
</div>

  </a> 

    {/if}
    {/if}
{/each}
{/each}
  </div>

<style>
  a h2{
    text-decoration: none;
    transition: 0.3s ease-out;
  }

  a:hover h2 {
    text-decoration: underline 2px #8884;
  }

  a p {
    transition: 0.4s ease-out;
    text-decoration: none;
    opacity: 0;
  }

  a:hover p {
    text-decoration: none;
    opacity: 1;
  }

  .title-wrapper {
    z-index: 1;
		height: calc(20vh - 0.5em + 5.5px);
    border-bottom: 2px dashed gray;
    padding: 1em;
    margin-top: -5.5px;
    display: flex;
    align-items: flex-end;
    position: sticky;
    top:2em;
  }
  .projects {
    padding: 4em;
    max-width: 1200px;
    margin: auto;

  }
  .title {
    opacity: 1.0;
    transition: 0.2s ease-out;
    padding-left: 1em;
    font-size: calc(2vw + 1.5em);
  }
</style>
