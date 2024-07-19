<script lang="ts">
	import { page } from '$app/stores';
	import { lang,theme,white,black } from '$lib/stores';
	import { menu } from '$lib/content/common';
	$: titul = $page.url.pathname.split('/').join(' | ');
</script>

<div class="nav"
     style="
     border-color: {($theme == 'dark')  ? $white : $black};"
  >
	{#each menu as item}
		<a href={item.href}>
      <div class="nav-item"
     style="
     border-color:{($theme == 'dark')  ? $white : $black};"
        class:active={item.href == $page.route.id}>
				<span class="mx-5">
					{item[$lang]}
				</span>
			</div>
		</a>
	{/each}
</div>

<style>
	span {
		text-rendering: geometricPrecision;
	}
	a {
		text-decoration: none;
	}
	.nav {
    border-right: 3px solid;
		height: 100vh;
		width: 60px;
		position: fixed;
		left: 0;
		top: 0;
		padding-top: 59.5px;
		z-index: 2;
		text-overflow: ellipsis;
	}
	.nav-item {
		white-space: nowrap;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		text-orientation: mixed;
		text-align: center;
		display: block;
		padding: 15px;
		width: 100%;
		height: calc(25vh - 40px);
	}

  .nav-item:not(:first-child) {
    border-top: 3px dashed;
  }
	.nav-item:hover {
    text-decoration: underline 2px dashed;
	}

	.active {
    text-decoration: underline 2px solid;
	}
</style>
