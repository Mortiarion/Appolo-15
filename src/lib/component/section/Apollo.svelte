<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Social_List from '$lib/component/header/Social_List.svelte';
</script>

<section class=" bg-center static min-h-[760px] bg-cover bg-no-repeat">
	<Container>
		<div class="relative">
			<Social_List classes="absolute right-[60px] top-[170px] flex flex-col gap-5" />
		</div>
	</Container>
</section>
