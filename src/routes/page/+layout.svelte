<script lang="ts">
	import Header from '$lib/component/header/Header.svelte';
	import Footer from '$lib/component/footer/Footer.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Social_List from '$lib/component/header/Social_List.svelte';
	import DividerIcon from '$lib/component/icons/Divider_Icon.svelte';
	
</script>

<svelte:head>
	<title>Політика конфіденційності</title>
</svelte:head>

<div class="flex min-h-screen flex-col text-black">
	<Header />
	<DividerIcon />
	<main class="flex-auto text-black">
		<slot />
	</main>
	<Section tag="footer">
		<Section>
			<Container>
				<div>
					<Social_List classes="flex gap-5 justify-end px-[60px] pb-[60px] pt-[20px]" />
				</div>
			</Container>
		</Section>
	</Section>
</div>


