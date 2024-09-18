<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';

	let slide = [
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg'],
		['/galery_one.jpg', '/galery_two.jpg', '/galery_three.jpg', '/galery_four.jpg']
	];

	let currentSlide = 0;

	function prevSlide() {
		currentSlide = currentSlide > 0 ? currentSlide - 1 : slide.length - 1;
	}

	function nextSlide() {
		currentSlide = currentSlide < slide.length - 1 ? currentSlide + 1 : 0;
	}
</script>

<Section>
	<Container classes='relative'>
		<!-- <button class="prev" on:click={prevSlide}>← Назад</button> -->
		<div class="slide_container">
			{#each slide as s, i}
				<div class="slide" class:active={i === currentSlide}>
					<img class="img_1" src={s[0]} alt="img_one" />
					<img class="img_2" src={s[1]} alt="img_two" />
					<img class="img_3" src={s[2]} alt="img_three" />
					<img class="img_4" src={s[3]} alt="img_four" />
				</div>
			{/each}
		</div>
		<!-- <button class="next" on:click={nextSlide}>Вперед →</button> -->
	</Container>
</Section>

<style lang="postcss">
	.slide_container {
		display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
		gap: 20px;
		position: relative;
		width: 100%;
		height: 500px;
		/* margin: 0 auto; */
		
		& .slide {
			/* width: 900px; */
			/* height: 500px; */
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 1fr);
			gap: 20px;
			position: absolute;
			width: 100%;
			height: 100%;
			transform: translateX(100%);
			transition: transform 0.5s ease-in-out;

			&.active {
				transform: translateX(0);
			}

			& img {
				height: 100%;
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

	.prev, .next {
		background-color: grey;
		position: absolute;
		height: 100%;
		padding: 10px;
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
</style>
