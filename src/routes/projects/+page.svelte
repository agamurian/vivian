<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { lang, theme, white, black } from '$lib/stores';
	import { locale_mapping } from '$lib/content/api.js';
	import { page } from '$app/stores';
	import { menu } from '$lib/content/common';
  export let data;
  let mapping = {'en':'en-US','ru':'ru-RU'}
	$: border_color = ($theme == 'dark')  ? $white : $black
	$: background_color = ($theme == 'dark')  ? $black : $white
</script>

	{#each menu as item}
      {#if item.href == $page.route.id}
              <div class="title-wrapper">
				<p class="title">
					{item[$lang]}
				</p>
              </div>
      {/if}
	{/each}
{#each data.projects.data as project}
  {#each data.projectsTranslations.data as et}
    {#if et.projects_id == project.id}
      {#if et.languages_code == locale_mapping[$lang]}
<div class="header">
	<a href={'/projects/' + project.url}>
			<div class="project-detail flex-1">
        <p class="pvh3"><b>{et.title}</b></p>
			</div>
			<div class="project-detail flex-2">
        <p class="pvh2">{et.content}</p>
			</div>
  </a>
</div>
    {/if}
    {/if}
{/each}
{/each}

<style>
	.header {
		height: calc(20vh - 1em + 4px);
		border-bottom: 2px dashed;
		padding: 0.5em;
		display: block;
		overflow: hidden;
	}
  a {
    margin: 0rem;
    display: flex;
  }
	.pvh1 {
    font-size: 2vh;
    text-overflow: ellipsis;
    overflow:hidden;
    max-height: 100%;
    max-width: 30vh;
    padding: 15px;
    padding-left: 20px;
	}
	.pvh2 {
    font-size: 2vh;
    text-overflow: ellipsis;
    overflow:hidden;
    max-height: 100%;
    max-width: 75vw;
    padding:15px;
	}
	.pvh3 {
		font-size: 3vh;
    text-overflow: ellipsis;
    overflow:hidden;
    max-height: 100%;
    max-width: 40vw;
    padding: 15px;
    padding-left: 20px;
	}
  .title {
    opacity: 1.0;
    transition: 0.2s ease-out;
    padding-left: 1em;
    font-size: calc(2vw + 1.5em);
  }
  .title-wrapper {
    height: calc(20vh - 1em + 4px);
    border-bottom: 3px dashed gray;
    padding: 1em;
    display: flex;
    align-items: flex-end;
  }
</style>
