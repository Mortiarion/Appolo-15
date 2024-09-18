<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Link from '$lib/base-components/Link.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Social_List from '$lib/component/header/Social_List.svelte';
</script>

<Section tag='footer'>
	<Container>
		<div class="flex items-end justify-between px-20 mb-28">
			<Logo />
			<div class="flex gap-10 items-center">
				<Social_List classes="flex flex-row gap-5" />
			</div>
			<Link classes='text-medium_grey' href="/page/privacy_policy">Політика конфіденційності</Link>
		</div>
	</Container>
</Section>
