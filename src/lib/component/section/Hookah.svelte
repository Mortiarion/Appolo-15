<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';

	let block_one = [
		{
			heading: 'ЗЕМЛЯ LITE',
			text: 'Використання для не міцних сортів табаку',
			paragraph: '300₴'
		},
		{
			heading: 'САТУРН PREMIUM',
			text: 'Використання міцних сортів табаку',
			paragraph: '350₴'
		},
		{
			heading: 'ЗАГАДКОВИЙ КОСМОС',
			text: 'Авторський мікс для подорожі у глибь космосу',
			paragraph: '390₴'
		},
		{
			heading: 'НЕВАГОМІСТЬ',
			text: 'Авторський мікс для подорожі по просторам галактик',
			paragraph: '390₴'
		}
	];
</script>

<section>
	<Container>
		<div
			class="mb-24 flex flex-col items-center bg-union bg-[length:162px_422px] bg-[top_100px_center] bg-no-repeat"
		>
			<h2 class="mb-[90px] font-audiowide text-5xl">Кальян</h2>
			<div class="mb-10 grid grid-cols-2 gap-x-60 gap-y-20">
				{#each block_one as block}
					<div class="flex flex-col items-center gap-2.5 font-audiowide">
						<h4 class="text-center text-4xl">{block.heading}</h4>
						<div class="separator"></div>
						<span class="text-center text-xl text-white">{block.text}</span>
						<p class="text-4xl">{block.paragraph}</p>
					</div>
				{/each}
			</div>
			<div class="flex flex-col items-center gap-2.5 font-audiowide">
				<h4 class="text-center text-4xl">АПОЛЛОН 15</h4>
				<div class="separator"></div>
				<span class="text-center text-xl text-white"
					>Авторський мікс для справжніх мандривників</span
				>
				<p class="text-4xl">390₴</p>
			</div>
		</div>
	</Container>
</section>

<style lang="postcss">
	.separator {
		border: 1px dashed white;
		width: 58%;
	}
</style>
