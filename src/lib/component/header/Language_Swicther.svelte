<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { locale, locales } from '$lib/i18n';

	let isOpenlanguageMenu = writable(false);
	let languageMenu: HTMLElement;

	onMount(() => {
		const closeList = (event: MouseEvent) => {
			if (languageMenu && !languageMenu.contains(event.target as Node)) {
				isOpenlanguageMenu.set(false);
			}
		};
		document.addEventListener('click', closeList);

		return () => {
			document.removeEventListener('click', closeList);
		};
	});

	function togglelanguageMenu() {
		isOpenlanguageMenu.update((value) => !value);
	}

	function setLocale(newLocale: string) {
		locale.set(newLocale);
	}

	$: currentLocale = $locale;
</script>

<div class="language-menu relative font-audiowide" bind:this={languageMenu}>
	<button on:click={togglelanguageMenu} class="language-menu-button px-4 py-1.5 text-2xl underline">
		{currentLocale}
	</button>

	<ul
		class:active={$isOpenlanguageMenu}
		class="language-dropdown text-main-button border bg-white px-4 py-1"
	>
		{#each locales as language}
			<li>
				<button
					on:click={togglelanguageMenu}
					type="button"
					class="text-main-button text-2xl underline"
					on:click={() => setLocale(language)}>{language}</button
				>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.language-menu {
		& .language-dropdown {
			display: none;
			&.active {
				position: absolute;
				display: flex;
				right: 0px;
				top: 0;
				flex-direction: column;
				gap: 10px;
				border-radius: 16px;
				background-color: transparent;
				z-index: 22;
			}
		}
	}
</style>
