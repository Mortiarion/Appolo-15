<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import { writable } from 'svelte/store';

	let slide = [
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg']
	];

	let currentSlide = 0;
	const activeIndex = writable<number | null>(null);
	const activeImageIndex = writable<number | null>(null);

	function prevSlide() {
		currentSlide = currentSlide > 0 ? currentSlide - 1 : slide.length - 1;
	}

	function nextSlide() {
		currentSlide = currentSlide < slide.length - 1 ? currentSlide + 1 : 0;
	}

	function openModal(slideIndex: number, imageIndex: number) {
		activeIndex.set(slideIndex);
		activeImageIndex.set(imageIndex);
	}

	function closeModal() {
		activeIndex.set(null);
		activeImageIndex.set(null);
	}

	function modalPrev() {
		activeImageIndex.update((imgIndex) => {
			if ($activeIndex !== null && imgIndex !== null) {
				const slideImages = slide[$activeIndex];
				return imgIndex > 0 ? imgIndex - 1 : slideImages.length - 1;
			}
			return imgIndex;
		});
	}

	function modalNext() {
		activeImageIndex.update((imgIndex) => {
			if ($activeIndex !== null && imgIndex !== null) {
				const slideImages = slide[$activeIndex];
				return imgIndex < slideImages.length - 1 ? imgIndex + 1 : 0;
			}
			return imgIndex;
		});
	}

	function getImageClass(index: number) {
		return `img_${index + 1}`;
	}
</script>

<Section>
	<Container classes="relative">
		<div>
			<button class="prev" on:click={prevSlide}>&#10094;</button>
			<div class="slide_container">
				{#each slide as s, slideIndex}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
					<div class="slide" class:active={slideIndex === currentSlide}>
						{#each s as imgSrc, imgIndex}
							<img
								class={getImageClass(imgIndex)}
								src={imgSrc}
								alt="img_preview"
								on:click={() => openModal(slideIndex, imgIndex)}
							/>
						{/each}
					</div>
				{/each}
			</div>
			<button class="next" on:click={nextSlide}>&#10095;</button>
		</div>

		{#if $activeIndex !== null && $activeImageIndex !== null}
			<div class="modal">
				<button class="modal_prev" on:click={modalPrev} type="button">&#10094;</button>
				<img class="modal_img" src={slide[$activeIndex][$activeImageIndex]} alt="full_view" />
				<button class="close" on:click={closeModal} type="button">&times;</button>
				<button class="modal_next" on:click={modalNext} type="button">&#10095;</button>
			</div>
		{/if}
	</Container>
</Section>

<style lang="postcss">
	.slide_container {
		display: flex;
		overflow: hidden;
		gap: 20px;
		position: relative;
		width: 100%;
		height: 488px;

		& .slide {
			width: 1000px;
			height: 488px;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 1fr);
			gap: 20px;
			position: absolute;
			transform: translateX(102%);
			transition: transform 0.5s ease-in-out;

			&.active {
				transform: translateX(0);
				height: 488px;
				width: 1000px;
			}

			& img {
				height: 100%;
				cursor: pointer;
				transition: transform 0.3s ease-in-out;

				&:hover {
					transform: scale(1.05);
				}
			}

			& .img_1 {
				grid-area: 1 / 1 / 2 / 2;
			}
			& .img_2 {
				grid-area: 1 / 2 / 2 / 3;
			}
			& .img_3 {
				grid-area: 2 / 1 / 3 / 3;
			}
			& .img_4 {
				grid-area: 1 / 3 / 3 / 5;
			}
		}
	}

	.prev,
	.next {
		background-color: #80808088;
		position: absolute;
		z-index: 1;
		height: 100%;
		padding: 20px;
		font-size: 40px;
	}

	.prev {
		border-radius: 20px 0 0 20px;
		left: 0;
	}

	.next {
		top: 0;
		right: 0;
		border-radius: 0 20px 20px 0;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #000000cc;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;

		& img {
			width: 50%;
		}

		& .modal_prev,
		.modal_next {
			font-size: 45px;
			position: absolute;
			top: 50%;
			padding: 20px;
			transition:
				background-color 0.3s ease,
				color 0.3s ease;
			border-radius: 8px;

			&:hover {
				background-color: grey;
				color: black;
			}

			&.modal_prev {
				left: 40px;
			}

			&.modal_next {
				right: 40px;
			}
		}

		& .close {
			font-size: 60px;
			padding: 0 30px;
			top: 20px;
			right: 20px;
			position: absolute;
			transition:
				background-color 0.3s ease,
				color 0.3s ease;
			border-radius: 8px;

			&:hover {
				background-color: grey;
				color: black;
			}
		}
	}
</style>
