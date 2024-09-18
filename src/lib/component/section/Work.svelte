<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Social_List from '../header/Social_List.svelte';
</script>

<Section>
	<Container>
		<div class="mb-28 flex justify-between px-20">
			<div class="flex flex-col gap-2.5">
				<Paragraph classes="font-audiowide text-4xl">Графік роботи</Paragraph>
				<Text classes="text-2xl">ПН-НД 14:00 - 23:00</Text>
			</div>
			<div class="flex flex-col gap-2.5">
				<Paragraph classes="font-audiowide text-4xl">Місцезнаходження</Paragraph>
				<Text classes="text-2xl">Райдужний массив 15/2</Text>
			</div>
			<div class="flex flex-col gap-[10px]">
				<Paragraph classes="font-audiowide text-4xl">Контакти</Paragraph>
				<a class="text-2xl" href="tel:+380936551515">+38 (093) 655-15-15</a>
				<Social_List classes="flex flex-row gap-5" />
			</div>
		</div>
	</Container>
</Section>
