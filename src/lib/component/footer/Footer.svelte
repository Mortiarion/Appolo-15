<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Link from '$lib/base-components/Link.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Section from '$lib/base-components/Section.svelte';
</script>

<Section tag='footer'>
	<Container>
		<div class="flex items-end px-20 mb-28">
			<Logo />
			<div class="flex gap-10 items-center">
			</div>
			<Link classes='ml-[30%]' href="/page/privacy_policy">Політика конфіденційності</Link>
		</div>
	</Container>
</Section>
