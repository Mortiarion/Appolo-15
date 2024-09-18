<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let items: {href: string, item: string }[] = [];
	export let classes: string = '';
</script>

<ul class={cn('', classes)}>
	{#each items as item}
		<li>
			<a href={item.href}>{item.item}</a>
		</li>
	{/each}
</ul>
