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
