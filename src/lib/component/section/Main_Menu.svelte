<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';

	let list_one = [
		{ text_one: 'Heineken', text_two: '80₴' },
		{ text_one: 'Stella Artois', text_two: '90₴' },
		{ text_one: 'Budweiser', text_two: '90₴' },
		{ text_one: 'Krusovice Svetle', text_two: '100₴' },
		{ text_one: 'Guinness', text_two: '100₴' },
		{ text_one: 'Krusovice Cerne', text_two: '90₴' },
		{ text_one: 'Corona', text_two: '90₴' },
		{ text_one: '', text_two: '' }
	];

	let list_two = [
		{ text_one: 'Морозиво NASA', text_two: '140₴' },
		{ text_one: 'В’ялене м’ясо', text_two: '80₴' },
		{ text_one: 'Горішки', text_two: '80₴' },
		{ text_one: 'Сухарики з часником', text_two: '80₴' }
	];

	let list_three = [
		{ text_one: 'Мертвий рашист', text_two: '0₴' },
		{ text_one: 'Космополитан', text_two: '0₴' },
		{ text_one: 'Відвертка', text_two: '0₴' },
		{ text_one: 'Голуба лагуна', text_two: '0₴' }
	];

	let list_four = [
		{ text_one: 'Мохито', text_two: '0₴' },
		{ text_one: 'Дайкірі', text_two: '0₴' },
		{ text_one: 'Куба лібре', text_two: '0₴' },
		{ text_one: 'Піна коллада', text_two: '0₴' }
	];

	let list_five = [
		{ text_one: 'Олд фешен', text_two: '0₴' },
		{ text_one: 'Пеніциллін', text_two: '0₴' },
		{ text_one: 'Хрещенний батько', text_two: '0₴' },
		{ text_one: 'Іржавий цвях', text_two: '0₴' }
	];

	let list_six = [
		{ text_one: 'Біла леді', text_two: '0₴' },
		{ text_one: 'Френч 75', text_two: '0₴' },
		{ text_one: 'Том коллінз', text_two: '0₴' },
		{ text_one: 'Негроні', text_two: '0₴' }
	];
	let list_seven = [
		{ text_one: 'Маргарита', text_two: '0₴' },
		{ text_one: 'Текила санрайз', text_two: '0₴' },
		{ text_one: 'Заздрість', text_two: '0₴' },
		{ text_one: 'Сміливий казак', text_two: '0₴' }
	];
	let list_eight = [
		{ text_one: 'Белліні', text_two: '0₴' },
		{ text_one: 'Мімоза', text_two: '0₴' },
		{ text_one: 'Апероль шпріц', text_two: '0₴' },
		{ text_one: 'Небесне сяйво', text_two: '0₴' }
	];
	let list_nine = [
		{ text_one: 'C', text_two: '0₴' },
		{ text_one: 'C', text_two: '0₴' },
		{ text_one: 'C', text_two: '0₴' },
		{ text_one: 'C', text_two: '0₴' }
	];
	let list_ten = [
		{ text_one: 'C', text_two: '0₴' },
		{ text_one: 'C', text_two: '0₴' },
		{ text_one: 'C', text_two: '0₴' },
		{ text_one: 'C', text_two: '0₴' }
	];
	let list_eleven = [
		{ text_one: 'С', text_two: '0₴' },
		{ text_one: 'С', text_two: '0₴' },
		{ text_one: 'С', text_two: '0₴' },
		{ text_one: 'С', text_two: '0₴' }
	];
	let list_twelve = [
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' }
	];
	let list_thersteen = [
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' }
	];
	let list_fourteen = [
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' },
		{ text_one: '', text_two: '0₴' }
	];
</script>

<Section>
	<Container>
		<div class="mb-28 px-20 font-audiowide">
			<h2 class="mb-16 text-center text-5xl">Меню</h2>
			<div class="grid grid-cols-2 gap-10">
				<div>
					<div class="mb-10 flex items-center">
						<p class="whitespace-nowrap text-4xl">Пиво</p>
						<div class="separator"></div>
						<span class="text-2xl">330мл/500мл</span>
					</div>
					<ul>
						{#each list_one as list}
							<li class="flex justify-between text-2xl">
								{list.text_one} <span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Закуски</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_two as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Коктейлі з водкою</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_three as list}
							<li class="flex justify-between text-2xl">
								<span>{list.text_one}</span>{list.text_two}
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Коктейлі з ромом</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_four as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Коктейлі з віскі</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_five as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Коктейлі з джином</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_six as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Коктейлі з текілою</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_seven as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Коктейлі з просекко</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_eight as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Чай/кава</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_nine as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Крафтові</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_ten as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Безалкогольні</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_eleven as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Саури</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_twelve as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">Наливки</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_thersteen as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="mb-10 flex items-center">
						<p class="text-4xl whitespace-nowrap">C</p>
						<div class="separator"></div>
					</div>
					<ul>
						{#each list_fourteen as list}
							<li class="flex justify-between text-2xl">
								{list.text_one}<span>{list.text_two}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</Container>
</Section>

<style lang="postcss">
	.separator {
		border: 1px dashed white;
		width: 100%;
		height: 1px;
		margin: 0px 10px;
	}
</style>
