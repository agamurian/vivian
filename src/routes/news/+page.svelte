<script lang="ts">
	import { lang, theme, white, black } from '$lib/stores';
  import { page } from '$app/stores';
	import { menu } from '$lib/content/common';
	import { locale_mapping } from '$lib/content/api.js';
  import { formatDate,getImageFromApi } from '$lib/utils.ts';
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

  <br>
{#each data.news.data.reverse() as newd}
  {#each data.newsTranslations.data as et}
    {#if et.news_id == newd.id}
      {#if et.languages_code == locale_mapping[$lang]}
      <div class="content-container medium centered-h py-4" >
        <div class="extrasmall px-0 md:px-16">
        <p class="date">
          {formatDate(newd.date)}
        </p>
        <p class="title-dynamic">
          {et.title}
        </p>
        <img class="news-image" src={getImageFromApi(newd.image)} />
        <p class="description">
          {@html et.content}
        </p>
        <br>
        <p class="title-news">
          +
        </p>
        <br>
        </div>
      </div>
    {/if}
    {/if}
{/each}
{/each}

<style>

  .date {
    font-weight: 300;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }
  .news-image {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 100%;
  }
  .description {
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.5;
  }
</style>
