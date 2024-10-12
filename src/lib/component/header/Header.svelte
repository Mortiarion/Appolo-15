<script lang="ts">
	import Navigation from '$lib/component/header/Navigation.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Language_Swicther from '$lib/component/header/Language_Swicther.svelte';
</script>

<section>
	<Container classes="relative">
		<div class="flex items-center justify-between px-[60px] py-[30px] text-2xl">
			<Logo />
			<Navigation />
			<Language_Swicther />
		</div>
	</Container>
</section>

<style lang="postcss">
</style>
