<script lang="ts">
	import { lang, theme, white, black } from '$lib/stores';
	import { locale_mapping } from '$lib/content/api.js';
  import { page } from '$app/stores';
  import { getImageFromApi } from '$lib/utils.ts';
	import { menu } from '$lib/content/common';
  export let data;

  const title = 'Vivian Del Rio'
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
          <div class="centered-h content-container large">
				  <p class="title">
					  {item[$lang]}
          </p>
          </div>
        </div>
      {/if}
  {/each}
  <div class = "centered-h content-container medium"
    >
  <div class="flex flex-col gap-16 py-12 px-0 md:px-16">
{#each data.projects.data as project}
  {#each data.projectsTranslations.data as et}
    {#if et.projects_id == project.id}
      {#if et.languages_code == locale_mapping[$lang]}
	<a href={'/projects/' + project.url}>

  <div class="flex flex-col md:flex-row gap-4 md:gap-8 ">
    <!-- Left Column (Image) -->
    <div class="w-full md:w-1/2">
        <img src={getImageFromApi(project.main_image, 600)} alt={title[$lang] + ' ' + et.title + ' ' + et.description } class="w-full h-auto object-conver"/>
    </div>

    <!-- Right Column (Text) -->
    <div class="w-full lg:w-1/3 md:w-1/2 flex flex-col justify-between" >
        <!-- Title at the top -->
        <h2 class="title-dynamic" style="margin-top: -0.125em">{et.title}</h2>

        <!-- Description at the bottom -->
        <p class="text-sm leading-relaxed mt-2">
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
    text-decoration: none;
  }

</style>
