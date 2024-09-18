<script lang="ts">
	import Navigation from '$lib/component/header/Navigation.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import List_Link from '$lib/base-components/List_Link.svelte';
	import Language_Swicther from '$lib/component/header/Language_Swicther.svelte';
	import Social_List from '$lib/component/header/Social_List.svelte';

	let items = [
		{ href: '/', item: 'Головна' },
		{ href: '/', item: 'Про нас' },
		{ href: '/', item: 'Меню' },
		{ href: '/', item: 'Галерея' },
		{ href: '/', item: 'FАQ' },
		{ href: '/', item: 'Контакти' }
	];
</script>

<Section classes="z-[1]" tag="header">
	<Container classes="relative">
		<div class="flex items-center justify-between px-[60px] py-[30px] text-2xl">
			<Logo />
			<List_Link classes="flex gap-[30px]" {items} />
			<Language_Swicther />
		</div>
		
	</Container>
</Section>

<style lang="postcss">
</style>
