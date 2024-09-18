<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let classes: string = '';
</script>

<span class={cn('', classes)}>
	<slot />
</span>
