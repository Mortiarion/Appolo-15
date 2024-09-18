<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Hookah_Icon from '$lib/component/icons/Hookah_Icon.svelte';
	import PlaystationIcon from '$lib/component/icons/Playstation_Icon.svelte';
	import Cocktails_Icon from '$lib/component/icons/Cocktails_Icon.svelte';
</script>

<Section>
	<Container classes='flex justify-center'>
		<div class="flex flex-col items-center pb-28 pt-8 w-[890px]">
			<Heading classes='text-5xl mb-10' level="h1">Ласкаво просимо до "Apollo 15"</Heading>
			<Paragraph classes="text-center text-xl">
				Наш Lounge Bar це затишний куточок, де час сповільнюється, а фантазія розлітається у світ
				загадкового космосу. Стильний інтер'єр, м'яке світло та димні кальяни створюють неймовірну
				та неповторну атмосферу, даруючи незабутні враження та приємні емоції. Барна карта приємно
				вас здивує як класичними так і авторськими міксами. А шанувальникам чаю ми пропонуємо
				оцінити вишукані сорти чаю з усього світу.
			</Paragraph>
			<Text classes='mb-16 text-xl'>Також до вашої уваги настільні ігри та ігри на PlayStation.</Text>
			<div class="grid grid-cols-3 items-center text-xl gap-12">
				<div class="flex flex-col items-center h-full justify-between gap-5">
					<Hookah_Icon />
					<Paragraph classes='text-center'>
						Димні та неймовірні кальяни поринуть вас в атмосферу невагомості, та перенесуть у
						таємничий космос!
					</Paragraph>
				</div>
				<div class="flex flex-col items-center h-full justify-between">
					<PlaystationIcon />
					<Paragraph classes='text-center'>
						Перенесе вас у загадковий світ віртуальної реальності, з самими свіжими іграми для вас
						та ваших друзів!
					</Paragraph>
				</div>
				<div class="flex flex-col items-center h-full justify-between">
					<Cocktails_Icon />
					<Paragraph classes='text-center'>
						Коктейльна карта відірве вас від реальності та подарує вишуканний світ незабутніх
						емоцій!
					</Paragraph>
				</div>
			</div>
		</div>
	</Container>
</Section>
