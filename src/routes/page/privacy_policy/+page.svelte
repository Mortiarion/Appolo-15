<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';

	let list = [
		{
			text_one: '1. Збір інформації',
			text_two:
				'Ми не збираємо жодних особистих даних від користувачів нашого сайту. Ви можете відвідувати та використовувати наш сайт без необхідності надання будь-якої інформації про себе.'
		},
		{
			text_one: '2. Використання інформації',
			text_two:
				'Оскільки ми не збираємо особисті дані, ми не використовуємо жодної інформації для комерційних чи інших цілей. Наш сайт не аналізує поведінку користувачів і не здійснює відстеження.'
		},
		{
			text_one: '3. Файли cookie',
			text_two:
				'Наш сайт може використовувати файли cookie для покращення вашого користувацького досвіду. Ці файли cookie не зберігають особисті дані і можуть бути вимкнені у налаштуваннях вашого браузера.'
		},
		{
			text_one: '4. Обмін даними',
			text_two:
				'Оскільки ми не збираємо особисті дані, ми не передаємо жодну інформацію третім особам.'
		},
		{
			text_one: '5. Безпека',
			text_two:
				'Ми застосовуємо всі можливі заходи для забезпечення безпеки на нашому сайті. Однак, оскільки ми не збираємо дані користувачів, вам не потрібно турбуватися про безпеку особистої інформації.'
		},
		{
			text_one: '6. Зміни до політики конфіденційності',
			text_two:
				'Ми можемо час від часу оновлювати цю політику конфіденційності. Усі зміни будуть відображені на цій сторінці.'
		},
		{
			text_one: '7. Контактна інформація',
			text_two:
				'Якщо у вас виникли питання щодо цієї політики конфіденційності, ви можете зв’язатися з нами через контактну інформацію, розміщену на нашому сайті.'
		}
	];
</script>

<Section>
	<Container>
		<div class="py-16 font-lato px-20">
			<Heading classes="text-5xl text-center mb-10" level="h1">Політика конфіденційності</Heading>
			<Paragraph classes="text-2xl mb-16"
				>Ця політика конфіденційності визначає, як наш сайт – «Apollo 15» обробляє особисту
				інформацію відвідувачів. Ми поважаємо вашу приватність та зобов'язуємося забезпечувати
				захист вашої інформації.
			</Paragraph>
			<div class='flex flex-col gap-10'>
				{#each list as l}
					<div class="flex flex-col gap-2.5 text-2xl">
						<Paragraph classes='font-bold'>{l.text_one}</Paragraph>
						<Text>{l.text_two}</Text>
					</div>
				{/each}
			</div>
		</div>
	</Container>
</Section>
