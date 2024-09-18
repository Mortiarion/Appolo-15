<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let src = '';
	export let alt = '';
	export let classes = '';
</script>

<img {src} {alt} decoding="async" class={cn('block h-auto max-w-full object-center', classes)} />
