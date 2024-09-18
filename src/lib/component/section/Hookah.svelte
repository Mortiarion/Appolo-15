<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Text from '$lib/base-components/Text.svelte';

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

<Section>
	<Container>
		<div class="mb-24 flex flex-col items-center bg-union bg-[top_100px_center] bg-no-repeat bg-[length:162px_422px]">
			<Heading classes="text-5xl font-audiowide mb-[90px]" level="h2">Кальян</Heading>
			<div class="mb-10 grid grid-cols-2 gap-x-60 gap-y-20">
				{#each block_one as block}
					<div class="flex flex-col items-center gap-2.5 font-audiowide">
						<Heading classes="text-4xl" level="h4">{block.heading}</Heading>
						<div class="separator"></div>
						<Text classes="text-lite_grey text-xl">{block.text}</Text>
						<Paragraph classes="text-4xl">{block.paragraph}</Paragraph>
					</div>
				{/each}
			</div>
			<div class="flex flex-col items-center gap-2.5 font-audiowide">
				<Heading classes="text-4xl" level="h4">АПОЛЛОН 15</Heading>
				<div class="separator"></div>
				<Text classes="text-lite_grey text-xl">Авторський мікс для справжніх мандривників</Text>
				<Paragraph classes="text-4xl">390₴</Paragraph>
			</div>
		</div>
	</Container>
</Section>

<style lang="postcss">
	.separator {
		border: 1px dashed white;
		width: 58%;
	}
</style>
