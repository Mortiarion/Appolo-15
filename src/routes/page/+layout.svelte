<script lang="ts">
	import Header from '$lib/component/header/Header.svelte';
	import Container from '$lib/base-components/Container.svelte';
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
	<footer>
		<Container>
			<div>
				<Social_List classes="flex gap-5 justify-end px-[60px] pb-[60px] pt-[20px]" />
			</div>
		</Container>
	</footer>
</div>
