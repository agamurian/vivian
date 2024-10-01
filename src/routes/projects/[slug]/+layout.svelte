<script>
	import { page } from '$app/stores';
	import { theme,white,black } from '$lib/stores';
  export const prerender = false
</script>

<div class="content"
style="color: { ($theme == 'dark' ) ? $white : $black };"
  >
	<slot />
</div>

<style>
	.content {
		padding-left: 0px;
  }
  :global(img){
    padding: 0rem;
    max-width: calc(800px - 2rem - 0px);
    max-height: 90vh;
  }
  :global(h1){
    padding: 3vw;
  }
  :global(h2){
    padding: 3vw;
  }
  :global(h3){
    padding: 3vw;
  }
  :global(h4){
    padding: 3vw;
  }
  :global(h5){
    padding: 3vw;
  }
  :global(h6){
    padding: 3vw;
  }
  :global(p){
    max-width: calc(100vw - 120px - 4rem);
    display: inline-block;
    padding: 3vw;
    line-height: 1.5;
    column-width: 800px;
  }
  :global(hr){
    outline: none;
      border: none;
  border-top: 3px solid #888;
  color: #888;
  overflow: visible;
  text-align: center;
  height: 5px;
  }
</style>
