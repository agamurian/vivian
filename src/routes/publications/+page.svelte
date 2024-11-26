<script lang="ts">
	import { lang, theme, white, black } from '$lib/stores';
  import { page } from '$app/stores';
	import { menu } from '$lib/content/common';
	import { locale_mapping } from '$lib/content/api.js';
  import { yearOfDate } from '$lib/utils.ts';
  export let data;

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

  <div class="flex flex-col gap-8 py-8">
    
{#each data.publications.data as publication}
  {#each data.publicationsTranslations.data as et}
    {#if et.publications_id == publication.id}
      {#if et.languages_code == locale_mapping[$lang]}
    <div class="wrapper-right wrapper-medium" >
      <div class="publication">
        <a href={"/publications/"+publication.url}>
      <div class="content-container medium py-4">
        <p class="date">
          {yearOfDate(publication.date)}
        </p>
        <p class="title-small">
          {et.title}
        </p>
        <p class="description">
          {et.source_name}
        </p>
      </div>
        </a>
      </div>
    </div>
    {/if}
    {/if}
{/each}
{/each}

  
  </div>

<style lang="postcss">
  .publication{transition: 0.2s ease-out}
  .publication:hover {
    background-color: #8884;
  }
  .date {
    font-weight: 300;
  }
  .description {
    color: #888;
  }
</style>
