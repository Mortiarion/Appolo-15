<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Hookah_Icon from '$lib/component/icons/Hookah_Icon.svelte';
	import PlaystationIcon from '$lib/component/icons/Playstation_Icon.svelte';
	import Cocktails_Icon from '$lib/component/icons/Cocktails_Icon.svelte';
</script>

<section>
	<Container classes="flex justify-center">
		<div class="flex w-[890px] flex-col items-center pb-28 pt-8">
			<h1 class="text-5xl mb-10">Ласкаво просимо до "Apollo 15"</h1>
			<p class="text-center text-xl">
				Наш Lounge Bar це затишний куточок, де час сповільнюється, а фантазія розлітається у світ
				загадкового космосу. Стильний інтер'єр, м'яке світло та димні кальяни створюють неймовірну
				та неповторну атмосферу, даруючи незабутні враження та приємні емоції. Барна карта приємно
				вас здивує як класичними так і авторськими міксами. А шанувальникам чаю ми пропонуємо
				оцінити вишукані сорти чаю з усього світу.
			</p>
			<span class="mb-16 text-xl"
				>Також до вашої уваги настільні ігри та ігри на PlayStation.</span
			>
			<div class="grid grid-cols-3 items-center gap-12 text-xl">
				<div class="flex h-full flex-col items-center justify-between gap-5">
					<Hookah_Icon />
					<p class="text-center">
						Димні та неймовірні кальяни поринуть вас в атмосферу невагомості, та перенесуть у
						таємничий космос!
					</p>
				</div>
				<div class="flex h-full flex-col items-center justify-between">
					<PlaystationIcon />
					<p class="text-center">
						Перенесе вас у загадковий світ віртуальної реальності, з самими свіжими іграми для вас
						та ваших друзів!
					</p>
				</div>
				<div class="flex h-full flex-col items-center justify-between">
					<Cocktails_Icon />
					<p class="text-center">
						Коктейльна карта відірве вас від реальності та подарує вишуканний світ незабутніх
						емоцій!
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>
