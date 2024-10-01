<script lang="ts">
	import { lang, theme, white, black } from '$lib/stores';
	const content = {
		gallery: { en: 'Gallery', ru: 'Галерея' },
		cont: { en: 'of contemprorary', ru: 'сoвременного' },
		art: { en: 'art', ru: 'искусства' },
		opened: {
			en: 'Opened in december 2020',
			ru: 'Открыта в декабре 2020 года'
		},
		andnow: {
			en: 'Since march 2022 exists only in virtual space',
			ru: 'С марта 2022 года находится только в виртуальном пространстве'
		}
	};
</script>

<section class="main-section"
style='border-bottom: 3px solid { ($theme == "dark" ) ? $white : $black}; }'
  >
	<div class="subsection p-10 pl-20 items-center flex">
		<h4>
			<br />
      website is under development
			<br />
		</h4>
	</div>
  <div class="subsection"
style='border: { ($theme == "dark" ) ? $black : $white}; color: { ($theme == "dark" ) ? $white : $black }'
    >
	</div>
</section>
<section class="main-section"
style='border-bottom: 3px solid { ($theme == "dark" ) ? $white : $black}; }'
  >
	<div class="subsection p-20 items-center flex">
		<h1>Vivian del Rio</h1>
	</div>
	<div class="subsection p-20 flex items-center align-middle">
		<p>
		</p>
	</div>
</section>

<style>
	.main-section {
		height: calc(50vh - 80px);
		display: flex;
		flex-direction: row;
	}
	.subsection {
		width: 50%;
	}
	.subsection:not(:last-child) {
		border-right: 3px dashed;
	}

	.bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
