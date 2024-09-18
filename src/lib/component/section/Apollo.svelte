<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Social_List from '$lib/component/header/Social_List.svelte';
</script>

<Section classes="static min-h-[760px] bg-no-repeat bg-cover bg-center">
	<Container>
		<div class="relative">
			<Social_List classes="absolute right-[60px] top-[170px] flex flex-col gap-5" />
		</div>
	</Container>
</Section>
