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
		 "
  >
	{#each menu as item}
    <a  href={item.href} class="nav-item">
				<span >
					{item[$lang]}
				</span>
			</a>
	{/each}
</div>

<style>
	a {
		text-decoration: none;
	}
	.nav {
		height: 100vh;
		width: calc(2em + 4px);
		position: fixed;
		left: 0;
		top: 0;
		padding-top: 2em;
		z-index: 2;
		border-right: 4px solid;
		text-overflow: ellipsis;
    transition: 0.4s ease-out;
    gap: 0px;
	}
	.nav-item {
    border-bottom: 2px solid ;
		white-space: nowrap;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		text-orientation: mixed;
		text-align: center;
		padding: calc(0.5em + 2px);
		width: 100%;
		height: calc(20vh - 0.5em);
		font-size: 0.75em;
		font-weight: 300;
    overflow: hidden;
    display:block;
	}

	.nav-item:hover {
		background-color: #909090;
	}

	.nav-item:first-child {
		border-bottom: #0000 solid 0px;
	}

</style>
