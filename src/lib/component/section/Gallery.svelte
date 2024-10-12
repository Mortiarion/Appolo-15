<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let slide = [
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg']
	];

	const getClassImg = (index: number) => `img-${index}`;

	let sliderTrack: HTMLDivElement;
	let width = 0;
	let slides: NodeListOf<HTMLDivElement>;

	function positionSlide() {
		slides.forEach((slide, index) => {
			let x = index * width;
			if (index === slides.length - 1) {
				x = -width;
			}

			slide.setAttribute('data-x', x.toString());
			slide.style.transform = `translateX(${x}px)`;
		});
	}

	onMount(() => {
		if (sliderTrack) {
			width = sliderTrack.clientWidth;
			slides = sliderTrack.querySelectorAll('.slide');
			positionSlide();
		}
	});

	function movePrev() {
		throttleNavigation(() => {
			slides.forEach((slide) => {
				const x = Number(slide.getAttribute('data-x'));

				let newX = x - width;

				if (newX < -(width * (slides.length - 2))) {
					newX = width;
					slide.style.zIndex = '-1';
				} else {
					slide.style.zIndex = '1';
				}

				slide.setAttribute('data-x', newX.toString());
				slide.style.transform = `translateX(${newX}px)`;
			});
		});
	}

	function moveNext() {
		throttleNavigation(() => {
			slides.forEach((slide) => {
				const x = Number(slide.getAttribute('data-x'));
				let newX = x + width;

				if (newX > width * (slides.length - 2)) {
					newX = -width;
					slide.style.zIndex = '-1';
				} else {
					slide.style.zIndex = '1';
				}

				slide.style.transform = `translateX(${newX}px)`;
				slide.setAttribute('data-x', newX.toString());
			});
		});
	}

	const activeIndex = writable<number>(-1);
	const activeImageIndex = writable<number>(-1);

	function openModal(slideIndex: number, imageIndex: number) {
		activeIndex.set(slideIndex);
		activeImageIndex.set(imageIndex);
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		activeIndex.set(-1);
		activeImageIndex.set(-1);
		document.body.style.overflow = 'visible';
	}

	function modalPrev() {
		throttleNavigation(() => {
			activeImageIndex.update((imgIndex) => {
				if ($activeIndex !== -1 && imgIndex !== -1) {
					const slideImages = slide[$activeIndex];
					return imgIndex > 0 ? imgIndex - 1 : slideImages.length - 1;
				}

				return imgIndex;
			});
		});
	}

	function modalNext() {
		throttleNavigation(() => {
			activeImageIndex.update((imgIndex) => {
				if ($activeIndex !== -1 && imgIndex !== -1) {
					const slideImages = slide[$activeIndex];
					return imgIndex < slideImages.length - 1 ? imgIndex + 1 : 0;
				}

				return imgIndex;
			});
		});
	}

	let touchStartX = 0;
	let touchEndX = 0;

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchMove(event: TouchEvent) {
		touchEndX = event.touches[0].clientX;
	}

	function handleTouchEnd() {
		if (touchEndX < touchStartX - 50) {
			modalNext();
			moveNext();
		} else if (touchEndX > touchStartX + 50) {
			modalPrev();
			movePrev();
		}
	}

	let isThrottled = false;

	function throttleNavigation(callback: () => void) {
		if (!isThrottled) {
			isThrottled = true;
			callback();
			setTimeout(() => {
				isThrottled = false;
			}, 1000);
		}
	}
</script>

<section>
	<Container>
		<div class="slider-container width-[500px]">
			<button class="prev" type="button" on:click={movePrev}>&#10094</button>
			<div
				class="slider-track"
				on:touchstart={handleTouchStart}
				on:touchmove={handleTouchMove}
				on:touchend={handleTouchEnd}
				bind:this={sliderTrack}
			>
				{#each slide as img, slideIndex}
					<!-- svelte-ignore a11y-click-events-have-key-events
					a11y-no-noninteractive-element-interactions -->
					<div class="slide xl:height-[495px]">
						{#each img as imgSrc, imgIndex}
							<img
								on:click={() => openModal(slideIndex, imgIndex)}
								class={getClassImg(imgIndex)}
								src={imgSrc}
								alt={`Зображення ${imgIndex + 1}`}
							/>
						{/each}
					</div>
				{/each}
			</div>
			<button class="next" type="button" on:click={moveNext}>&#10095</button>
		</div>

		{#if $activeIndex !== -1 && $activeImageIndex !== -1}
			<div
				class="modal"
				on:touchstart={handleTouchStart}
				on:touchmove={handleTouchMove}
				on:touchend={handleTouchEnd}
			>
				<button type="button" on:click={modalPrev} class="modal-prev">&#10094</button>
				<img
					class="modal-img"
					src={slide[$activeIndex][$activeImageIndex]}
					alt={`Картинка галереї ${$activeImageIndex + 1}`}
				/>
				<button type="button" on:click={modalNext} class="modal-next">&#10095</button>
				<button type="button" on:click={closeModal} class="close">&times</button>
			</div>
		{/if}
	</Container>
</section>

<style lang="postcss">
	.slider-container {
		position: relative;
		overflow: hidden;

		& .prev,
		.next {
			position: absolute;
			top: 50%;
			z-index: 2;
			top: 0;
			bottom: 0;
			padding: 0 15px;
			font-size: 40px;
			transition: transform 0.3s ease;

			&:hover {
				transform: scale(1.55);
			}
		}

		& .prev {
			left: 30px;
		}

		& .next {
			right: 30px;
		}

		& .slider-track {
			height: 625px;
			display: flex;
			justify-content: center;
			align-items: center;

			& .slide {
				height: 595px;
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 20px;
				position: absolute;
				transition:
					transform 1s ease,
					visibility 1s ease;
				visibility: hidden;

				&[data-x='0'] {
					visibility: visible;
				}

				& img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 0.4s ease;
					border-radius: 12px;
					cursor: pointer;

					&:hover {
						transform: scale(1.05);
					}
				}

				& .img-0 {
					grid-area: 1 / 1 / 2 / 2;
				}
				& .img-1 {
					grid-area: 1 / 2 / 2 / 3;
				}
				& .img-2 {
					grid-area: 2 / 1 / 3 / 3;
				}
				& .img-3 {
					grid-area: 1 / 3 / 3 / 5;
				}
			}
		}
	}

	.modal {
		position: fixed;
		inset: 0;
		background-color: #000000cc;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;

		& img {
			width: 40%;
			border-radius: 18px;
		}

		& .modal-prev,
		.modal-next {
			font-size: 45px;
			position: absolute;
			top: 50%;
			padding: 20px;
			transition:
				background-color 0.3s ease,
				color 0.3s ease,
				transform 0.3s ease;
			border-radius: 8px;

			&:hover {
				background-color: grey;
				color: black;
				transform: scale(1.55);
			}

			&.modal-prev {
				left: 40px;
			}

			&.modal-next {
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
				transform 0.3s ease,
				color 0.3s ease;
			border-radius: 8px;

			&:hover {
				background-color: grey;
				color: black;
				transform: scale(1.55);
			}
		}
	}

	/* @media (width: 1024px) {
		.slide {
			height: 495px;
		}
	} */
</style>
