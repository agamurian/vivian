<script lang="ts">
	import { page } from '$app/stores';
	import { lang, theme, white, black } from '$lib/stores';
	import { menu } from '$lib/content/common';
	$: border_color = ($theme == 'dark')  ? $white : $black
	$: background_color = ($theme == 'dark')  ? $black : $white
</script>

<div class="nav"
     style="
     border-color: {border_color};
		 background-color: {background_color};
		 "
  >
	{#each menu as item}
      <a  href={item.href} class="nav-item"
				style="

				"
        class:active={item.href == $page.route.id}>
				<span class="mx-5">
					{item[$lang]}
				</span>
			</a>
	{/each}
</div>

<style>
	span {
		text-rendering: optimizeLegibility;
	}
	a {
		text-decoration: none;
	}
	.nav {
		height: 100vh;
		width: 2em;
		position: fixed;
		left: 0;
		top: 0;
		padding-top: calc(2em - 2px);
		z-index: 2;
		border-right: 4px solid;
		text-overflow: ellipsis;
  transition: 0.4s ease-out;
	}
	.nav-item {
    border-top: 2px solid;
		white-space: nowrap;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		text-orientation: mixed;
		text-align: center;
		display: block;
		padding: 0.5em;
		width: 100%;
		height: calc(20vh - 1em);
		font-size: 0.75em;
		font-weight: 300;
	}

  .nav-item:first-child {
    border-bottom: 2px solid ;
  }

	.nav-item:hover {
		background-color: #909090;
	}

	.active {
    text-decoration: underline 2px solid;
	}
</style>
