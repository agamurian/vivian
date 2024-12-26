<script lang="ts">
	import { lang, theme, white, black } from '$lib/stores';
	import { locale_mapping } from '$lib/content/api.js';
  import { page } from '$app/stores';
  import { getImageFromApi } from '$lib/utils.ts';
	import { menu } from '$lib/content/common';
  export let data;
  
	$: border_color = ($theme == 'dark')  ? $white : $black
	$: background_color = ($theme == 'dark')  ? $black : $white

  console.log(data.mainPage.data)

  console.log(data.mainPageTranslations.data)
</script>

{#each data.mainPageTranslations.data as translation}
  {#if translation.languages_code == locale_mapping[$lang]}

        <div class="title-wrapper"
          style="
          border-color: {border_color};
          background-color: {background_color};
          "
          >
          <div class="centered-h content-container large">
				  <p class="title">
  {translation.author_name}
          </p>
          </div>
        </div>
  
  <div class="centered-h content-container small">
    <div class="col-wrapper top-wrapper px-0 md:px-16">
      <div class="col right-col">
        <img class="portrait" src={getImageFromApi(data.mainPage.data.portrait, 500)} alt={translation.author_name} />
      </div>
      <div class="col left-col">
        <p>
          {@html translation.about_author}
        </p>
      </div>
    </div>
  </div>
  <div class="centered-h content-container large">
    <div class="descr">
        <p>
          {@html translation.large_content}
        </p>
    </div>
  </div>

  {/if}
{/each}

<style>
  .portrait{
    margin-left: auto;
    max-width: 100%;
  }
  .top-wrapper{
    margin-top: 3em;
    justify-content: center;
  }
  .right-col {
    flex: 1;
  }
  .left-col {
    margin-left: auto;
    flex: 1;
  }
  .descr {
    margin-top: 4em;
    max-width: 600px;
  }
</style>
