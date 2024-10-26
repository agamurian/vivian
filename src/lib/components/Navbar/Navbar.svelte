<script lang="ts">
	import { page } from '$app/stores';
	import { theme, white, black, lang, hideNav,localtitle } from '$lib/stores';
	import LangSwitcher from './LangSwitcher.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
	import VerticalNav from './VerticalNav.svelte';
  // last slash removal:
	$: title = "Vivian Del Rio";
</script>

<nav
	class="sticky top-0 p-0 navbar flex"
  style="
  background-color: { ($theme == "dark" ) ? $black : $white}; 
  color: { ($theme == 'dark' ) ? $white : $black }
  height: calc(2em + 4px);
	border-bottom: 2px solid { ($theme == 'dark' ) ? $white : $black };
  "
>

	<div class="flex flex-grow flex-nowrap inlinish">
        <span class='nav_title' style='color: { ($theme == 'dark' ) ? $white : $black };'>
          {title}
        </span>
	</div>
	<div class="flex flex-grow">
		<section style="flex: 1" />
		<section class="nav-item">
			<ThemeSwitcher />
		</section>
		<section class="nav-item">
			<LangSwitcher />
		</section>
	</div>
</nav>
<VerticalNav />

<style>
  .nav_title{
  display: flex;
  transition: 0.4s ease-out;
  font-weight: 400;
  font-size: 1em;
  margin-left: 3em;
  }
  .inlinish{
    display: flex;
    flex-wrap:nowrap;
    flex-direction: row;
    align-items: center;
  }
	.nav-item {
    flex-wrap: nowrap;
		display: flex;
		flex: 0;
    padding: 0.5em;
    font-size: 0.75em;
	}
	.navbar {
    height: calc(2em + 2px);
    flex-wrap: nowrap;
		z-index: 1;
		font-size: 1em;
		top: 0;
		transition: 0.4s ease-out;
	}
</style>
