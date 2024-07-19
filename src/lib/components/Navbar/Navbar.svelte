<script lang="ts">
	import { page } from '$app/stores';
	import { theme, white, black, lang, hideNav,localtitle } from '$lib/stores';
	import LangSwitcher from './LangSwitcher.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
	import KerkaNav from '../Icons/KerkaNav.svelte';
	import VerticalNav from './VerticalNav.svelte';
  let lastScrollTop = 0;
	$: title = $page.url.pathname.split('/').slice(0,-1).join('/');
  let hidebale = false
</script>

<svelte:window
	on:scroll={() => {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset > 1200){
      hidebale = true
    }
    if (hidebale) {
    if ((scrollTop > lastScrollTop)) {
			hideNav.set(true);
		} else hideNav.set(false);
    } else hideNav.set(false);
    lastScrollTop = scrollTop;
	}}
/>

<nav
	class:hide-nav={$hideNav}
	class="sticky top-0 p-0 navbar flex"
  style="
  background-color: { ($theme == "dark" ) ? $black : $white}; 
  color: { ($theme == 'dark' ) ? $white : $black }
  height: 60px;
	border-bottom: 3px solid { ($theme == 'dark' ) ? $white : $black };
  "
>
	<section class="text-left w-15 p-0">
		<a class="m-0 p-0" href="/#">
			<KerkaNav />
		</a>
	</section>

	<div class="flex flex-grow flex-nowrap inlinish">
		<section style="flex: 1" />
		<section class="w-25 nav-item" style="width: 80vw">
      <div class='bread' style="background-color: #7550; width: 100vw; margin-top: -0.05rem; border:dotted 0.2rem #0000 ">
        {#if title.length > 0 }
        <span class='nav_title' style='color: { ($theme == 'dark' ) ? $white : $black };padding-right: 15px;padding-left:15px;border-radius: 0.2rem;overflow:hidden'>
          <a href = "{title}">
          {title}
          </a>
        </span>
        <span class='localtitle' style='color: { ($theme == 'dark' ) ? $white : $black };padding-right: 15px;padding-left:15px;border-radius: 0.2rem;overflow:hidden'>
          {$localtitle}
        </span>
        {/if}
      </div>
		</section>
	</div>
	<div class="flex flex-grow">
		<section style="flex: 1" />
		<section class="w-15 nav-item" style="
    ">
			<ThemeSwitcher />
		</section>
		<section class="w-15 nav-item">
			<LangSwitcher />
		</section>
	</div>
</nav>
<VerticalNav />

<style>
  .nav_title{
    max-width: 50vw;
    flex-wrap: nowrap;
  text-overflow: ellipsis;
  transition: 1s ease;
  font-size: 1.0rem;
  font-weight: 600;
  padding: 1rem;
  background-color: #0440;
  }
  .nav_title:hover{
  background-color: #4444;
  }
  .inlinish{
    display: flex;
    flex-wrap:nowrap;
    flex-direction: row;
  }
  .localtitle{
    max-width: 50vw;
  text-overflow: ellipsis;
  transition: 1s ease;
  font-size: 1.0rem;
  font-weight: 600;
  padding: 0rem;
  background-color: #0440;
  }
  .localtitle:hover{
  background-color: #0000;
  }
	.nav-item {
    flex-wrap: nowrap;
		display: flex;
		flex: 0;
		padding: 7px 7px 7px 15px;
		height: 100%;
	}
	.navbar {
    flex-wrap: nowrap;
		z-index: 2000;
		font-size: 20px;
		top: 0;
		transition: 0.4s ease-out;
	}
	.hide-nav {
		top: -60px;
		transition: 0.4s ease-out;
	}
</style>
