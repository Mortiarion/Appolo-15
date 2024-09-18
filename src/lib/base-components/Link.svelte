<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let href: string;
	export let classes = '';
</script>

<a {href} class={cn('', classes)}><slot /></a>
