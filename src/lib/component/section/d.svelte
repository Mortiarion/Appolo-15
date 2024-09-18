<!-- src/lib/PhotoGalleryWithModal.svelte -->
<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// export let photos: { src: string; alt: string }[] = [];
	const photos = [
		{ src: '/galery_one.jpg', alt: 'Sample Image 1' },
		{ src: '/galery_two.jpg', alt: 'Sample Image 2' },
		{ src: '/galery_three.jpg', alt: 'Sample Image 3' },
		{ src: '/galery_four.jpg', alt: 'Sample Image 4' },
		{ src: '/galery_five.jpg', alt: 'Sample Image 5' },
		{ src: '/galery_six.jpg', alt: 'Sample Image 6' },
		{ src: '/galery_three.jpg', alt: 'Sample Image 7' }
	];

	const activeIndex = writable<number | null>(null);

	const openModal = (index: number) => {
		activeIndex.set(index);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		activeIndex.set(null);
		document.body.style.overflow = '';
	};

	const nextPhoto = () => {
		activeIndex.update((n) => (n !== null && n < photos.length - 1 ? n + 1 : n));
	};

	const prevPhoto = () => {
		activeIndex.update((n) => (n !== null && n > 0 ? n - 1 : n));
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') nextPhoto();
		if (e.key === 'ArrowLeft') prevPhoto();
	};

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<Section>
	<Container>
		<div class="mb-28">
			<div class="gallery">
				{#each photos as photo, index}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
					<div class={`div${index + 1}`}>
						<img src={photo.src} alt={photo.alt} class="photo" on:click={() => openModal(index)} />
					</div>
				{/each}
			</div>

			{#if $activeIndex !== null}
				<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="modal" on:click={closeModal}>
					<img src={photos[$activeIndex].src} alt={photos[$activeIndex].alt} />
					<div class="controls">
						<button on:click|stopPropagation={prevPhoto} disabled={$activeIndex === 0}>
							&#10094;
						</button>
						<button
							on:click|stopPropagation={nextPhoto}
							disabled={$activeIndex === photos.length - 1}
						>
							&#10095;
						</button>
					</div>
					<div class="close" on:click|stopPropagation={closeModal}>&times;</div>
				</div>
			{/if}
		</div>
	</Container>
</Section>

<style lang="postcss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		/* grid-template-rows: repeat(5, 1fr); */
		grid-column-gap: 5px;
		grid-row-gap: 5px;
	}

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.div3 {
		grid-area: 2 / 1 / 3 / 3;
	}
	.div4 {
		grid-area: 1 / 3 / 3 / 4;
	}
	.div5 {
		grid-area: 1 / 4 / 2 / 5;
	}
	.div6 {
		grid-area: 1 / 5 / 2 / 6;
	}
	.div7 {
		grid-area: 2 / 4 / 3 / 6;
	}

	.photo {
		width: 100%;
		height: auto;
		border-radius: 8px;
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	.photo:hover {
		transform: scale(1.05);
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal img {
		max-width: 90%;
		max-height: 90%;
	}

	.controls {
		position: absolute;
		display: flex;
		justify-content: space-between;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}

	.controls button {
		background: none;
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
	}

	.close {
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 2rem;
		color: white;
		cursor: pointer;
	}
</style>
