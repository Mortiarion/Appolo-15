<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Social_List from '../header/Social_List.svelte';
</script>

<section>
	<Container>
		<div class="mb-28 flex justify-between px-20">
			<div class="flex flex-col gap-2.5">
				<p class="font-audiowide text-4xl">Графік роботи</p>
				<span class="text-2xl">ПН-НД 14:00 - 23:00</span>
			</div>
			<div class="flex flex-col gap-2.5">
				<p class="font-audiowide text-4xl">Місцезнаходження</p>
				<span class="text-2xl">Райдужний массив 15/2</span>
			</div>
			<div class="flex flex-col gap-[10px]">
				<p class="font-audiowide text-4xl">Контакти</p>
				<a class="text-2xl" href="tel:+380936551515">+38 (093) 655-15-15</a>
				<Social_List classes="flex flex-row gap-5" />
			</div>
		</div>
	</Container>
</section>
