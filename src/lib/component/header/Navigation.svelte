<script lang="ts">
	import List_Link from '$lib/base-components/List_Link.svelte';

	let listLink = [
		{ href: '/', item: 'Головна' },
		{ href: '/', item: 'Про нас' },
		{ href: '/', item: 'Меню' },
		{ href: '/', item: 'Галерея' },
		{ href: '/', item: 'FАQ' },
		{ href: '/', item: 'Контакти' }
	];
</script>

<List_Link classes="flex gap-[30px]" items={listLink} />
<!-- linear-gradient(89.44deg, #E9DBB8 -2.51%, #CBA868 14.83%, #A4783C 32.58%, #683901 46.86%, #BD9656 63.29%, #FDEAC0 70.84%, #987033 88.79%, #664E2D 99.5%) -->
 