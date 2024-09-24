<script lang="ts">
	import Header from '$lib/component/header/Header.svelte';
	import Footer from '$lib/component/footer/Footer.svelte';
	import Wellcome from '$lib/component/section/Wellcome.svelte';
	import Hookah from '$lib/component/section/Hookah.svelte';
	import Main_Menu from '$lib/component/section/Main_Menu.svelte';
	import Photo_Galery from '$lib/component/section/Photo_Galery.svelte';
	import Faq from '$lib/component/section/Faq.svelte';
	import Location_Map from '$lib/component/section/Location_Map.svelte';
	import Work from '$lib/component/section/Work.svelte';
	import Apollo from '$lib/component/section/Apollo.svelte';
</script>

<svelte:head>
	<title>Apollo 15</title>
</svelte:head>

<div class=" bg-app flex min-h-screen flex-col font-lato text-white">
	<video class="video" autoplay loop muted playsinline>
		<source src="/paralax_two.mp4" type="video/mp4" />
		Ваш браузер не підтримує відтворення відео.
	</video>
	<div class="relative">
		<Header />

		<!-- <video id="p" class="p" autoplay loop muted playsinline>
			<source src="/paralax_two.mp4" type="video/mp4" />
			Ваш браузер не підтримує відтворення відео.
		</video> -->

		<Apollo />
	</div>
	<main class="flex-auto">
		<Wellcome />
		<Hookah />
		<Main_Menu />
		<Photo_Galery />
		<Faq />
		<Location_Map />
		<Work />
	</main>
	<Footer />
</div>

<style lang="postcss">
	

	.video {
		position: fixed;
		width: 100%;
		z-index: -1;
	}
</style>
