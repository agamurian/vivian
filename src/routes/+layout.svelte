<script>
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { page } from '$app/stores';
	import { theme,white,black } from '$lib/stores';
	$: title = $page.url.pathname.split('/').join(' + ') + ' + Vivian del Rio';
	const description = 'Artist';
</script>

<svelte:head>
	<!--<link rel="stylesheet" href="/tutorial/dark-theme.css">-->
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />

	<meta property="og:image" content="" />
	<meta property="og:image:width" content="200" />
	<meta property="og:image:height" content="200" />
	<meta name="twitter:image" content="" />
	<meta itemprop="image" content="" />
</svelte:head>

<div style="transition: 0.3 ease;background-color: { ($theme == "dark" ) ? $black : $white}; color: { ($theme == "dark" ) ? $white : $black };min-height: 100vh;">
<Navbar />
<div class="content">
	<slot />
</div>
</div>

<style>
  @global(*,body){
    transition: 0.3 ease;
  }
	.content {
		padding-left: 2em;
	}
</style>
