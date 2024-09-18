<script lang="ts">
    import { cn } from '$lib/utils/cn'

    export let level: 'h1' | 'h2' | 'h3' | 'h4' = 'h4';
    export let classes = '';

</script>

<svelte:element this={level} class={cn('', classes)}>
	<slot />
</svelte:element>
